import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OfflineClassesEntity } from 'src/entities/OfflineClass.entity';
import { OnlineClassesEntity } from 'src/entities/OnlineClass.entity';
import {
  FindManyOptions,
  FindOptionsOrderValue,
  LessThan,
  MoreThan,
  Repository,
} from 'typeorm';
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
  ) {}

  onModuleInit() {
    this.batchService = this.clientBatch.getService('BatchService');
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
          totalStudent: number | undefined;
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

      const classRepo = this.selectMode(grpc_batch.data?.batchMode);

      const classData = classRepo.create({
        ...data,
        class_mode: grpc_batch.data?.batchMode.toLowerCase(),
        batch_name: grpc_batch.data.batchName,
        total_student: grpc_batch.data?.totalStudent,
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

  async findAll(
    query: { page: string; limit: string; classtype: string },
    uuid?: string,
  ) {
    try {
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 5;
      const classtype = query.classtype;

      const nowDate = new Date();

      let filter: FindManyOptions<OfflineClassesEntity>;

      if (classtype === 'ongoing') {
        filter = {
          where: {
            is_delete: false,
            staff_id: uuid,
            start_date: MoreThan(nowDate),
          },
          skip: (page - 1) * limit,
          take: limit,
          order: { createdAt: 'DESC' as FindOptionsOrderValue },
          relations: ['staff'],
        };
      } else if (classtype === 'completed') {
        filter = {
          where: {
            is_delete: false,
            staff_id: uuid,
            start_date: LessThan(nowDate),
            end_time: LessThan(nowDate),
          },
          skip: (page - 1) * limit,
          take: limit,
          order: { createdAt: 'DESC' as FindOptionsOrderValue },
          relations: ['staff'],
        };
      } else {
        filter = {};
        return {
          success: false,
          message: 'query is worng',
        };
      }

      const [online, onlinTotal] = await this.onlineRepo.findAndCount(filter);

      const [offline, offlineTotal] =
        await this.offlineRepo.findAndCount(filter);

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
