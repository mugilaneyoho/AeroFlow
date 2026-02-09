import { InjectQueue } from '@nestjs/bull';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Queue } from 'bull';
import csv from 'csv-parser';
import { LeadsEntity, LeadStatus } from 'src/entities/leads.entity';
import { Readable } from 'stream';
import { And, Not, Repository } from 'typeorm';
import { LeadsUpdateDto } from './dto/leads-update.dto';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(LeadsEntity)
    private leadsRepo: Repository<LeadsEntity>,

    @InjectQueue('lead-assign')
    private queue: Queue,
  ) {}

  async uploadLeads(
    file: Express.Multer.File,
  ): Promise<{ success: boolean; message: string }> {
    try {
      if (!file || !file?.buffer) {
        throw new BadRequestException('Invalid file upload');
      }

      const leads: Array<{
        name?: string;
        phone: string;
        email?: string;
      }> = [];

      await new Promise<void>((resolve, reject) => {
        Readable.from(file.buffer)
          .pipe(csv())
          .on(
            'data',
            (row: { name?: string; phone: string; email?: string }) => {
              leads.push({
                name: row?.name,
                phone: row?.phone,
                email: row?.email,
              });
            },
          )
          .on('end', resolve)
          .on('error', reject);
      });

      if (leads.length) {
        await this.leadsRepo
          .createQueryBuilder()
          .insert()
          .into(LeadsEntity)
          .values(leads)
          .execute();
      }

      return { success: true, message: 'leads are uploaded' };
    } catch (error) {
      console.error(error, 'upload csv file error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async assignLeads(userid: string[]) {
    try {
      for (const id of userid) {
        await this.queue.add('assign', {
          id,
          limit: 20,
        });
      }
    } catch (error) {
      console.error(error, 'leads assign error!');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async update(data: LeadsUpdateDto, uuid: string) {
    try {
      const lead = await this.leadsRepo.findOne({
        where: {
          uuid,
          status: And(Not(LeadStatus.REJECTED), Not(LeadStatus.ADMITTED)),
        },
      });
      if (!lead) {
        return new NotFoundException({
          success: false,
          message: 'leads not founded in db.',
        });
      }

      Object.assign(lead, data);

      await this.leadsRepo.save(lead);

      return {
        success: true,
        message: 'leads updated successfully.',
      };
    } catch (error) {
      console.error(error, 'leads updated error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async findAll(query: { page: string; limit: string }) {
    try {
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 10;

      const [leads, total] = await this.leadsRepo.findAndCount({
        where: { status: Not(LeadStatus.NEW) },
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        success: true,
        message: 'lead data fetched',
        data: leads,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      console.error(error, 'leads fetch all error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async findByEmployee(uuid: string) {
    try {
      const leads = await this.leadsRepo.find({
        where: {
          assignedTo: uuid,
          status: And(Not(LeadStatus.REJECTED), Not(LeadStatus.ADMITTED)),
        },
      });

      return leads;
    } catch (error) {
      console.error(error, 'leads fetch all error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }
}
