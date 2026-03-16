import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    create(data: CreateStaffDto): Promise<import("@nestjs/common").InternalServerErrorException | import("@nestjs/common").ConflictException | {
        success: boolean;
        message: string;
        data: import("../entities/staff.entity").StaffProfileEntity;
    }>;
    findAll(query: {
        page: string;
        limit: string;
    }): Promise<{
        success: boolean;
        message: string;
        data: import("../entities/staff.entity").StaffProfileEntity[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    dashboard(): Promise<{
        todayclasses: (import("../entities/OfflineClass.entity").OfflineClassesEntity | import("../entities/OnlineClass.entity").OnlineClassesEntity)[];
    } | undefined>;
    update(uuid: string, data: UpdateStaffDto): Promise<import("@nestjs/common").NotFoundException | {
        staff: import("../entities/staff.entity").StaffProfileEntity;
    }>;
    findOne(uuid: string): Promise<{
        success: boolean;
        message: string;
        data: import("../entities/staff.entity").StaffProfileEntity | null;
    }>;
    deleteOne(uuid: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
