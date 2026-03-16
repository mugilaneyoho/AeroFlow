import { Server, Socket } from "socket.io";
import { NotificationService } from "../notification.service";
export declare class NotificationGateway {
    private readonly notificationServise;
    server: Server;
    handleConnection(user: Socket): void;
    handleDisconnect(user: Socket): void;
    constructor(notificationServise: NotificationService);
    handleNotification(user: Socket): Promise<void>;
}
