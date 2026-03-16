import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
export declare class ClassesController {
    private readonly classService;
    constructor(classService: ClassesService);
    create(data: CreateClassDto): Promise<import("@nestjs/common").InternalServerErrorException | {
        success: boolean;
        message: string;
        data: import("../entities/OnlineClass.entity").OnlineClassesEntity;
    }>;
    findAll(query: {
        page: string;
        limit: string;
        classtype: string;
    }): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
        meta?: undefined;
    } | {
        success: boolean;
        message: string;
        data: (import("../entities/OnlineClass.entity").OnlineClassesEntity | import("../entities/OfflineClass.entity").OfflineClassesEntity)[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findbystaff(uuid: string, query: {
        page: string;
        limit: string;
        classtype: string;
    }): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
        meta?: undefined;
    } | {
        success: boolean;
        message: string;
        data: (import("../entities/OnlineClass.entity").OnlineClassesEntity | import("../entities/OfflineClass.entity").OfflineClassesEntity)[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    update(data: UpdateClassDto, param: {
        uuid: string;
        mode: string;
    }): Promise<import("@nestjs/common").NotFoundException | undefined>;
    findOne(param: {
        uuid: string;
        mode: string;
    }): Promise<import("@nestjs/common").NotFoundException | {
        success: boolean;
        message: string;
        data: import("../entities/OnlineClass.entity").OnlineClassesEntity;
    }>;
    deleteone(param: {
        uuid: string;
        mode: string;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
}
