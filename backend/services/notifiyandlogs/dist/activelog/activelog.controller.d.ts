import { ActivelogService } from './activelog.service';
import { ActivityLogEntity } from '../entity/activitylog';
export declare class ActivelogController {
    private readonly activeLogService;
    constructor(activeLogService: ActivelogService);
    handleActivityUpdate(message: any): void;
    create(body: Partial<ActivityLogEntity>): Promise<ActivityLogEntity | undefined>;
    findAll(): Promise<ActivityLogEntity[] | undefined>;
    findOne(uuid: string): Promise<ActivityLogEntity>;
    update(uuid: string, body: Partial<ActivityLogEntity>): Promise<ActivityLogEntity>;
    remove(uuid: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
