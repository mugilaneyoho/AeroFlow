import { InternalServerErrorException, NotFoundException, OnModuleInit, Logger } from '@nestjs/common';
import { OfflineClassesEntity } from 'src/entities/OfflineClass.entity';
import { OnlineClassesEntity } from 'src/entities/OnlineClass.entity';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import * as microservices from '@nestjs/microservices';
import { UpdateClassDto } from './dto/update-class.dto';
export declare class ClassesService implements OnModuleInit {
    private offlineRepo;
    private onlineRepo;
    private clientBatch;
    private readonly kafkaclient;
    private readonly logger;
    private batchService;
    constructor(offlineRepo: Repository<OfflineClassesEntity>, onlineRepo: Repository<OnlineClassesEntity>, clientBatch: microservices.ClientGrpc, kafkaclient: microservices.ClientKafka, logger: Logger);
    handleClassStart(): Promise<void>;
    onModuleInit(): Promise<void>;
    onmoduleDestroy(): Promise<void>;
    selectMode(mode: string): Repository<OnlineClassesEntity>;
    create(data: CreateClassDto): Promise<InternalServerErrorException | {
        success: boolean;
        message: string;
        data: OnlineClassesEntity;
    }>;
    findOne(uuid: string, mode: string): Promise<NotFoundException | {
        success: boolean;
        message: string;
        data: OnlineClassesEntity;
    }>;
    findAll(query: {
        page: string;
        limit: string;
        classtype: string;
    }, uuid?: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
        meta?: undefined;
    } | {
        success: boolean;
        message: string;
        data: (OnlineClassesEntity | OfflineClassesEntity)[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    deleteOne(uuid: string, mode: string): Promise<{
        success: boolean;
        message: string;
    }>;
    update(uuid: string, data: UpdateClassDto, mode: string): Promise<NotFoundException | undefined>;
}
