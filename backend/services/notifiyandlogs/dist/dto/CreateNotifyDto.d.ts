import { NotificationType, NotificationPriority, NotificationRole } from "../entity/notify";
export declare class CreateNotifyDto {
    title: string;
    message: string;
    userId: string;
    type: NotificationType;
    priority: NotificationPriority;
    Role: NotificationRole;
}
