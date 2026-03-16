import { StatusRecordEntity } from './statusrecord.entity';
export declare class AttendanceEntity {
    id: number;
    uuid: string;
    classId: string;
    staffId: string;
    date: Date;
    present_count: number;
    absent_count: number;
    createdAt: Date;
    updatedAt: Date;
    records: StatusRecordEntity[];
}
