export declare enum ActivityType {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    PAYMENT = "PAYMENT",
    REFUND = "REFUND"
}
export declare enum ActivityStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    PENDING = "PENDING"
}
export declare class ActivityLogEntity {
    uuid: string;
    description: string;
    type: ActivityType;
    status: ActivityStatus;
    performedBy: string;
    relatedEntity: string;
    createdAt: Date;
    updatedAt: Date;
}
