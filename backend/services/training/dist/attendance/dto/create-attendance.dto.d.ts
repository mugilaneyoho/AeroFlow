import { StatusRecordEnum } from 'src/entities/statusrecord.entity';
declare class AttenRec {
    studentId: string;
    status: StatusRecordEnum;
}
export declare class CreateAttendanceDto {
    classId: string;
    staffId: string;
    date: Date;
    records: AttenRec[];
}
export {};
