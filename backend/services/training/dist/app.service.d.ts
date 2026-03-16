import { OnModuleInit } from '@nestjs/common';
import { OnlineClassesEntity } from './entities/OnlineClass.entity';
import { Repository } from 'typeorm';
import { OfflineClassesEntity } from './entities/OfflineClass.entity';
import { StaffProfileEntity } from './entities/staff.entity';
import * as microservices from '@nestjs/microservices';
export declare class AppService implements OnModuleInit {
    private onlineRepo;
    private offlineRepo;
    private staffRepo;
    private client;
    private CommonService;
    constructor(onlineRepo: Repository<OnlineClassesEntity>, offlineRepo: Repository<OfflineClassesEntity>, staffRepo: Repository<StaffProfileEntity>, client: microservices.ClientGrpc);
    getHello(): string;
    onModuleInit(): void;
    AdminDashboard(): Promise<any>;
}
