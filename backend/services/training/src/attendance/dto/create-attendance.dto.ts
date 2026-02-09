import { StatusRecordEnum } from 'src/entities/statusrecord.entity';

export class CreateAttendanceDto {
  classId: string;
  staffId: string;
  date: Date;
  records: {
    studentId: string;
    status: StatusRecordEnum;
  }[];
}
