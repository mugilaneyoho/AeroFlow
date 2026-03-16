import { AttendanceEntity } from './attendance.entity';
export declare enum StatusRecordEnum {
    PRESENT = "PRESENT",
    ABSENT = "ABSENT"
}
export declare class StatusRecordEntity {
    id: number;
    uuid: string;
    attendanceId: string;
    studentId: string;
    status: StatusRecordEnum;
    createdAt: Date;
    updatedAt: Date;
    attendance: AttendanceEntity;
}
