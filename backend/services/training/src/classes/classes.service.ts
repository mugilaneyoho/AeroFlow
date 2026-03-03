import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { OfflineClassesEntity } from 'src/entities/OfflineClass.entity';
import { OnlineClassesEntity } from 'src/entities/OnlineClass.entity';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { lastValueFrom, Observable } from 'rxjs';
import * as microservices from '@nestjs/microservices';
import { UpdateClassDto } from './dto/update-class.dto';

interface batchgrpc {
  GetById(data: { batchid: string }): Observable<any>;
}

@Injectable()
export class ClassesService implements OnModuleInit {
  private batchService: batchgrpc;

  constructor(
    @InjectRepository(OfflineClassesEntity)
    private offlineRepo: Repository<OfflineClassesEntity>,
    @InjectRepository(OnlineClassesEntity)
    private onlineRepo: Repository<OnlineClassesEntity>,
    @Inject('batch')
    private clientBatch: microservices.ClientGrpc,

    @Inject('KAFKA_PRODUCER_SERVICE') private readonly kafkaclient: microservices.ClientKafka,
    private readonly logger: Logger    

  ) {}     

  @Cron('* * * * *')
  async handleClassStart() {
  const classes = await this.onlineRepo.findAll()
  const current = Date.now();
  const beforeTime = current + 5 * 60 * 1000

  for (const classData of classes){
    const startTime = new Date(classData.start_time).getTime()
    if (startTime >= current && startTime <= beforeTime){ 

    this.kafkaclient.emit('class started',{
      uuid: classData.uuid,
      subject: classData.subject,
      batch_name: classData.batch_name,
      start_time: classData.start_time,
    })
    }
  }
}


  
  async onModuleInit() {
    this.batchService = this.clientBatch.getService('BatchService');
    try {
      await this.kafkaclient.connect()
      this.logger.log('kafka producer connected successfully')
    } catch (error) {
          this.logger.error('kafka producer connection faild', error)
    }
  }

  async onmoduleDestroy(){
    try {
      await this.kafkaclient.close()
    } catch (error) {
      this.logger.error('kafka producer disconnect', error)
    }
  }     
  

  selectMode(mode: string) {
    if (mode === 'ONLINE') {
      return this.onlineRepo;
    } else if (mode === 'OFFLINE') {
      return this.offlineRepo;
    } else {
      throw new NotFoundException('pass right class mode');
    }
  }

  async create(data: CreateClassDto) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const grpc_batch: {
        success: boolean;
        data: {
          batchMode: string;
          batchName: string;
        };
      } = await lastValueFrom(
        this.batchService.GetById({
          batchid: data.batch_id,
        }),
      );

      if (!grpc_batch.success) {
        console.error('grpc staff profile error.');
        return new InternalServerErrorException({
          success: false,
          message: 'internal server error.',
        });
      }

      console.log(grpc_batch.data, "datas");

      const classRepo = this.selectMode(grpc_batch.data?.batchMode);

      const classData = classRepo.create({
        ...data,
        batch_name: grpc_batch.data.batchName,
      });

      const final = await classRepo.save(classData);

      return {
        success: true,
        message: 'class create successfully.',
        data: final,
      };
    } catch (error) {
      console.error(error, 'create class error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async findOne(uuid: string, mode: string) {
    try {
      const classRepo = this.selectMode(mode);

      const data = await classRepo.findOne({
        where: { uuid },
      });

      return {
        success: true,
        message: 'data fetched',
        data,
      };
    } catch (error) {
      console.error(error, 'find class error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async findAll(query: { page: string; limit: string }) {
    try {
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 5;

      const [online, onlinTotal] = await this.onlineRepo.findAndCount({
        where: { is_delete: false },
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      const [offline, offlineTotal] = await this.offlineRepo.findAndCount({
        where: { is_delete: false },
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      const total = onlinTotal + offlineTotal;
      const classes = [...online, ...offline];

      return {
        success: true,
        message: 'classes fecthed',
        data: classes,
        meta: {
          total,
          page,
          limit: limit * 2,
          totalPages: Math.ceil(total / (limit * 2)),
        },
      };
    } catch (error) {
      console.error(error, 'create class error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async deleteOne(uuid: string, mode: string) {
    try {
      const classRepo = this.selectMode(mode);

      await classRepo.update({ uuid }, { is_delete: true });

      return {
        success: true,
        message: 'class deleted successfully.',
      };
    } catch (error) {
      console.error(error, 'find class error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async update(uuid: string, data: UpdateClassDto, mode: string) {
    try {
      const classRepo = this.selectMode(mode);

      const classes = await classRepo.findOne({ where: { uuid } });

      if (!classes) {
        return new NotFoundException({
          success: false,
          message: 'classes not founded.',
        });
      }

      Object.assign(classes, data);

      await classRepo.save(classes);
    } catch (error) {
      console.error(error, 'find class error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }
}
