import { AttendanceEntity } from 'src/entities/attendance.entity';
import { StatusRecordEntity } from 'src/entities/statusrecord.entity';
import { Repository } from 'typeorm';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import type { Queue } from 'bull';
export declare class AttendanceService {
    private attendanceRepo;
    private statusRepo;
    private queue;
    constructor(attendanceRepo: Repository<AttendanceEntity>, statusRepo: Repository<StatusRecordEntity>, queue: Queue);
    create(data: CreateAttendanceDto): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(classId: string): Promise<{
        success: boolean;
        message: string;
        data: AttendanceEntity[];
    }>;
}
