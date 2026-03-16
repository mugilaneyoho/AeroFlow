import type { Job } from 'bull';
import { StatusRecordEntity } from 'src/entities/statusrecord.entity';
import { Repository } from 'typeorm';
export declare class AttendanceProcessor {
    private statusRepo;
    constructor(statusRepo: Repository<StatusRecordEntity>);
    handel(job: Job): Promise<void>;
}
