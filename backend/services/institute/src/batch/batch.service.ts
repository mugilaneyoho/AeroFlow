import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BatchEntity } from 'src/entities/batch.entity';
import { LessThan, Repository } from 'typeorm';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';

@Injectable()
export class BatchService {
  constructor(
    @InjectRepository(BatchEntity)
    private batchRepo: Repository<BatchEntity>,
  ) {}

  async create(data: CreateBatchDto) {
    try {
      const exist = await this.batchRepo.findOne({
        where: { batch_name: data.batch_name },
      });

      if (exist) {
        return new ConflictException({
          success: false,
          message: 'batch name already taken to chose other name.',
        });
      }

      const batch = this.batchRepo.create({ ...data });

      await this.batchRepo.save(batch);

      return {
        success: true,
        message: 'batch created successfully',
        data: batch,
      };
    } catch (error) {
      console.error(error, 'create batch error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error!',
      });
    }
  }

  async findOne(uuid: string) {
    try {
      const batch = await this.batchRepo.findOne({
        where: { uuid, is_delete: false },
      });

      if (!batch) {
        return new NotFoundException({
          success: false,
          message: 'batch not founded Or Maybe its deleted',
        });
      }

      return {
        success: true,
        message: 'batch details fetched',
        data: batch,
      };
    } catch (error) {
      console.error(error, 'find batch error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error!',
      });
    }
  }

  async findAll(query: { page: string; limit: string }) {
    try {
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 10;
      const [batch, total] = await this.batchRepo.findAndCount({
        where: { is_delete: false },
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      if (!batch) {
        return new NotFoundException({
          success: false,
          message: 'batch not founded',
        });
      }

      return {
        success: true,
        message: 'batch details fetched',
        data: batch,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      console.error(error, 'find batch error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error!',
      });
    }
  }

  async findAllBycourse(
    course_id: string,
    query: { page: string; limit: string },
  ) {
    try {
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 10;

      const [batchs, total] = await this.batchRepo.findAndCount({
        where: { course_id, is_delete: false },
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        success: true,
        message: 'batch data fetched',
        data: batchs,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      console.error(error, 'find all by course batch error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error!',
      });
    }
  }

  async updateOne(uuid: string, data: UpdateBatchDto) {
    try {
      const batch = await this.batchRepo.findOne({ where: { uuid } });

      if (!batch) {
        return new NotFoundException({
          success: false,
          message: 'batch not founded',
        });
      }

      Object.assign(batch, data);

      await this.batchRepo.save(batch);

      return {
        success: true,
        message: 'batch updated',
        data: batch,
      };
    } catch (error) {
      console.error(error, 'update batch error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async softDelete(uuid: string) {
    try {
      await this.batchRepo.update({ uuid }, { is_delete: true });

      return {
        success: true,
        message: 'batch deleted successfully.',
      };
    } catch (error) {
      console.error(error, 'soft delete batch error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server eroor',
      });
    }
  }

  async findAllBycourseNew(course_id: string) {
    try {
      const nowDate = new Date();

      const batches = await this.batchRepo.find({
        where: { course_id, start_date: LessThan(nowDate), is_delete: false },
      });

      return {
        success: true,
        message: 'batch data fetched',
        data: batches,
      };
    } catch (error) {
      console.error(error, 'find all by course batch error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error!',
      });
    }
  }
}
