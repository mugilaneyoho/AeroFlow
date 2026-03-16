export declare enum NotificationType {
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    PENDING = "PENDING",
    DUE_AMOUNT = "DUE_AMOUNT",
    CLASS_STARTED = "CLASS_STARTED"
}
export declare enum NotificationPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
export declare enum NotificationRole {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT",
    PAYMENT = "PAYMENT",
    TELECALLING = "TELECALLING"
}
export declare class NotificationEntity {
    uuid: string;
    title: string;
    message: string;
    userId: string;
    type: NotificationType;
    Role: NotificationRole;
    priority: NotificationPriority;
    isRead: boolean;
    CreateAt: Date;
    UpdateAt: Date;
}
