import { ActivityLogEntity } from '../entity/activitylog';
import { Repository } from 'typeorm';
export declare class ActivelogService {
    private logRepo;
    constructor(logRepo: Repository<ActivityLogEntity>);
    create(data: Partial<ActivityLogEntity>): Promise<ActivityLogEntity | undefined>;
    findAll(): Promise<ActivityLogEntity[] | undefined>;
    findOne(uuid: string): Promise<ActivityLogEntity>;
    update(uuid: string, data: Partial<ActivityLogEntity>): Promise<ActivityLogEntity>;
    remove(uuid: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
