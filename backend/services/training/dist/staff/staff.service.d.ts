import { ConflictException, InternalServerErrorException, NotFoundException, OnModuleInit } from '@nestjs/common';
import { StaffProfileEntity } from 'src/entities/staff.entity';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import * as microservices from '@nestjs/microservices';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { OfflineClassesEntity } from 'src/entities/OfflineClass.entity';
import { OnlineClassesEntity } from 'src/entities/OnlineClass.entity';
export declare class StaffService implements OnModuleInit {
    private staffRepo;
    private offlineRepo;
    private onlineRepo;
    private client;
    private AuthService;
    constructor(staffRepo: Repository<StaffProfileEntity>, offlineRepo: Repository<OfflineClassesEntity>, onlineRepo: Repository<OnlineClassesEntity>, client: microservices.ClientGrpc);
    onModuleInit(): void;
    create(data: CreateStaffDto): Promise<InternalServerErrorException | ConflictException | {
        success: boolean;
        message: string;
        data: StaffProfileEntity;
    }>;
    findAll(query: {
        page: string;
        limit: string;
    }): Promise<{
        success: boolean;
        message: string;
        data: StaffProfileEntity[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(uuid: string): Promise<{
        success: boolean;
        message: string;
        data: StaffProfileEntity | null;
    }>;
    deleteOne(uuid: string): Promise<{
        success: boolean;
        message: string;
    }>;
    update(uuid: string, data: UpdateStaffDto): Promise<NotFoundException | {
        staff: StaffProfileEntity;
    }>;
    dashboard(): Promise<{
        todayclasses: (OfflineClassesEntity | OnlineClassesEntity)[];
    } | undefined>;
}
