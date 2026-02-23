import { InjectQueue } from '@nestjs/bull';
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Queue } from 'bull';
import csv from 'csv-parser';
import { LeadsEntity, LeadStatus } from 'src/entities/leads.entity';
import { Readable } from 'stream';
import { And, Not, Repository } from 'typeorm';
import { LeadsUpdateDto } from './dto/leads-update.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class LeadsService implements OnModuleInit {
  constructor(
    @InjectRepository(LeadsEntity)
    private leadsRepo: Repository<LeadsEntity>,

    @InjectQueue('lead-assign')
    private queue: Queue,

    @Inject('activelog-service')
    private readonly kafkaActiveLog: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaActiveLog.subscribeToResponseOf('activelog.created');
    await this.kafkaActiveLog.connect();
  }

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
              if (row?.phone !== '') {
                leads.push({
                  name: row?.name,
                  phone: row?.phone,
                  email: row?.email,
                });
              }
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

  async assignLeads(userid: any[], count: number) {
    try {
      console.log(userid, count);

      for (const user of userid) {
        await this.queue.add('assign', {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          id: user?.uuid,
          limit: count,
        });
      }

      return { success: true, message: 'leads assigned few minitues' };
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

      this.kafkaActiveLog.emit('activelog.created', {
        subject: 'status updated',
        userId: '',
        activelogType: 'telecallers',
        description: '',
      });

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
        relations: ['employee'],
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

  async findByEmployee(
    uuid: string,
    query: { page: string; limit: string; status: LeadStatus },
  ) {
    try {
      let leads: LeadsEntity[];

      if (query.status == LeadStatus.ASSIGNED) {
        leads = await this.leadsRepo.find({
          where: {
            assignedTo: uuid,
            status: query.status,
          },
          select: ['uuid', 'phone', 'notes', 'status', 'name'],
        });
      } else {
        leads = await this.leadsRepo.find({
          where: {
            assignedTo: uuid,
            status: query.status,
          },
          relations: ['employee'],
        });
      }

      return leads;
    } catch (error) {
      console.error(error, 'leads fetch all error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }

  async findCompleted(uuid: string) {
    try {
      const leads = await this.leadsRepo.find({
        where: {
          assignedTo: uuid,
          status: And(Not(LeadStatus.ADMITTED), Not(LeadStatus.ASSIGNED)),
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

  async recentAdmit() {
    const data = await this.leadsRepo.find({
      where: { status: LeadStatus.ADMITTED },
      relations: ['employee'],
      order: { createdAt: 'DESC' },
    });

    return data;
  }

  async findByStatus(uuid: string) {
    try {
      const leadStatsRaw = await this.leadsRepo
        .createQueryBuilder('leads')
        .select('leads.assignedTo', 'assignedTo')
        .addSelect('leads.status', 'status')
        .addSelect('COUNT(leads.id)', 'count')
        .where('leads.assignedTo = :assignedTo', {
          assignedTo: uuid,
        })
        .groupBy('leads.assignedTo')
        .addGroupBy('leads.status')
        .getRawMany();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const leadStats = leadStatsRaw.reduce(
        (acc: any, row: any) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          acc[row.status] = Number(row.count);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return acc;
        },
        {} as Record<string, number>,
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return leadStats;
    } catch (error) {
      console.error(error, 'leads fetch all error');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error',
      });
    }
  }
}
