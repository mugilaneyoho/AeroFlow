import * as microservices from '@nestjs/microservices';
import { CreateNotifyDto } from 'src/dto/CreateNotifyDto';
import { UpdateNotificationDto } from 'src/dto/UpdateNotifyDto';
import { NotificationEntity } from 'src/entity/notify';
import { Repository } from 'typeorm';
export declare class NotificationService {
    private notifyRepo;
    private readonly kafkaClient;
    constructor(notifyRepo: Repository<NotificationEntity>, kafkaClient: microservices.ClientKafka);
    onModuleInit(): Promise<void>;
    handleNotificationCreated(message: any): void;
    create(dto: CreateNotifyDto): Promise<{
        success: boolean;
        message: string;
        data: NotificationEntity;
    } | undefined>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        data: NotificationEntity[];
    } | undefined>;
    findOne(uuid: string): Promise<NotificationEntity | undefined>;
    update(uuid: string, dto: UpdateNotificationDto): Promise<{
        success: boolean;
        message: string;
        data: NotificationEntity;
    } | undefined>;
    remove(uuid: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
