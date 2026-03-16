import { NotificationService } from './notification.service';
import { CreateNotifyDto } from '../dto/CreateNotifyDto';
import { UpdateNotificationDto } from 'src/dto/UpdateNotifyDto';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    create(dto: CreateNotifyDto): Promise<{
        success: boolean;
        message: string;
        data: import("../entity/notify").NotificationEntity;
    } | undefined>;
    handleNotificationCreated(message: any): void;
    findAll(): Promise<{
        success: boolean;
        message: string;
        data: import("../entity/notify").NotificationEntity[];
    } | undefined>;
    findOne(id: string): Promise<import("../entity/notify").NotificationEntity | undefined>;
    update(uuid: string, dto: UpdateNotificationDto): Promise<{
        success: boolean;
        message: string;
        data: import("../entity/notify").NotificationEntity;
    } | undefined>;
    remove(uuid: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
