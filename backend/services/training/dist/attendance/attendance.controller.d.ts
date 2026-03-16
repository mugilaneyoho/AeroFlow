import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceController {
    private attendaceService;
    constructor(attendaceService: AttendanceService);
    create(data: CreateAttendanceDto): Promise<{
        success: boolean;
        message: string;
    }>;
    find(classId: string): Promise<{
        success: boolean;
        message: string;
        data: import("../entities/attendance.entity").AttendanceEntity[];
    }>;
}
