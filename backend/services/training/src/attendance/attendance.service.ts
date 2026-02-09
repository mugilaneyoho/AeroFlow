import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendanceEntity } from 'src/entities/attendance.entity';
import {
  StatusRecordEntity,
  StatusRecordEnum,
} from 'src/entities/statusrecord.entity';
import { Repository } from 'typeorm';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(AttendanceEntity)
    private attendanceRepo: Repository<AttendanceEntity>,
    @InjectRepository(StatusRecordEntity)
    private statusRepo: Repository<StatusRecordEntity>,
    @InjectQueue('attendance-status')
    private queue: Queue,
  ) {}

  async create(data: CreateAttendanceDto) {
    try {
      const count = {
        present: 0,
        absent: 0,
      };

      for (const status of data.records) {
        const d =
          status.status == StatusRecordEnum.PRESENT
            ? (count['present'] = count['present'] + 1)
            : (count['absent'] = count['absent'] + 1);
      }

      const attendance = this.attendanceRepo.create({
        classId: data.classId,
        staffId: data.staffId,
        date: data.date,
        present_count: count.present,
        absent_count: count.absent,
      });

      const update = await this.attendanceRepo.save(attendance);

      for (const status of data.records) {
        await this.queue.add('assign', {
          attendanceId: update.uuid,
          studentId: status.studentId,
          status: status.status,
        });
      }

      return {
        success: true,
        message: 'attendance uploaded',
      };
    } catch (error) {
      console.log(error, 'attendance error!.');
      throw new InternalServerErrorException({
        success: false,
        message: 'internal server error.',
      });
    }
  }

  async findAll(classId: string) {
    try {
      const data = await this.attendanceRepo.find({ where: { classId } });
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
}
