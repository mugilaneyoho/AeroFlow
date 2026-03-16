import { OfflineClassesEntity } from './OfflineClass.entity';
import { OnlineClassesEntity } from './OnlineClass.entity';
export declare class StaffProfileEntity {
    id: number;
    uuid: string;
    staff_id: string;
    staff_name: string;
    phone_number: string;
    address: string;
    email: string;
    experience: string;
    employee_type: string;
    qualification: string;
    expertise: string;
    is_active: boolean;
    is_delete: boolean;
    createdAt: string;
    updatedAt: string;
    offline_class: OfflineClassesEntity[];
    online_class: OnlineClassesEntity[];
}
