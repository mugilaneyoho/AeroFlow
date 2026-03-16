"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const microservices = __importStar(require("@nestjs/microservices"));
const microservices_1 = require("@nestjs/microservices");
const typeorm_1 = require("@nestjs/typeorm");
const notify_1 = require("../entity/notify");
const typeorm_2 = require("typeorm");
let NotificationService = class NotificationService {
    notifyRepo;
    kafkaClient;
    constructor(notifyRepo, kafkaClient) {
        this.notifyRepo = notifyRepo;
        this.kafkaClient = kafkaClient;
    }
    async onModuleInit() {
        await this.kafkaClient.connect();
        console.log('Kafka Producer Connected');
    }
    handleNotificationCreated(message) {
        console.log(message);
        console.log('class start');
    }
    async create(dto) {
        try {
            const notification = this.notifyRepo.create(dto);
            const res = await this.notifyRepo.save(notification);
            this.kafkaClient.emit('NotificationCreated', res);
            return {
                success: true,
                message: 'notification data created successfully',
                data: res,
            };
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAll() {
        try {
            const res = await this.notifyRepo.find();
            return {
                success: true,
                message: 'notification data fetched',
                data: res,
            };
        }
        catch (error) {
            console.error(error);
        }
    }
    async findOne(uuid) {
        try {
            const notification = await this.notifyRepo.findOne({
                where: { uuid: uuid },
            });
            if (!notification)
                throw new common_1.HttpException('Notification not found', common_1.HttpStatus.NOT_FOUND);
            return notification;
        }
        catch (error) {
            console.error(error);
        }
    }
    async update(uuid, dto) {
        try {
            const notification = await this.notifyRepo.findOne({
                where: { uuid: uuid },
            });
            if (!notification) {
                throw new common_1.HttpException('Notification not found', common_1.HttpStatus.NOT_FOUND);
            }
            Object.assign(notification, dto);
            const res = await this.notifyRepo.save(notification);
            return {
                success: true,
                message: 'notification updated successfully',
                data: res,
            };
        }
        catch (error) {
            console.error(error);
        }
    }
    async remove(uuid) {
        const res = await this.notifyRepo.findOneBy({ uuid });
        if (!res) {
            throw new common_1.HttpException('Notification not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.notifyRepo.remove(res);
        return {
            success: true,
            message: 'Notification deleted successfully',
        };
    }
};
exports.NotificationService = NotificationService;
__decorate([
    (0, microservices_1.EventPattern)('class_started'),
    __param(0, microservices.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationService.prototype, "handleNotificationCreated", null);
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notify_1.NotificationEntity)),
    __param(1, (0, common_1.Inject)('KAFKA_CLIENT')),
    __metadata("design:paramtypes", [typeorm_2.Repository, microservices.ClientKafka])
], NotificationService);
//# sourceMappingURL=notification.service.js.map