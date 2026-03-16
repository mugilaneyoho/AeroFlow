import { StaffProfileEntity } from './staff.entity';
export declare class OfflineClassesEntity {
    id: number;
    uuid: string;
    batch_id: string;
    staff_id: string;
    staff: StaffProfileEntity;
    subject: string;
    start_date: Date;
    start_time: Date;
    end_time: Date;
    batch_name: string;
    class_mode: string;
    total_student: number;
    present_student: number;
    is_delete: boolean;
    createdAt: Date;
    updatedAt: Date;
}
