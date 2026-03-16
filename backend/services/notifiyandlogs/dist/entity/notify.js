"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEntity = exports.NotificationRole = exports.NotificationPriority = exports.NotificationType = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
var NotificationType;
(function (NotificationType) {
    NotificationType["INFO"] = "INFO";
    NotificationType["SUCCESS"] = "SUCCESS";
    NotificationType["PENDING"] = "PENDING";
    NotificationType["DUE_AMOUNT"] = "DUE_AMOUNT";
    NotificationType["CLASS_STARTED"] = "CLASS_STARTED";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var NotificationPriority;
(function (NotificationPriority) {
    NotificationPriority["LOW"] = "LOW";
    NotificationPriority["MEDIUM"] = "MEDIUM";
    NotificationPriority["HIGH"] = "HIGH";
})(NotificationPriority || (exports.NotificationPriority = NotificationPriority = {}));
var NotificationRole;
(function (NotificationRole) {
    NotificationRole["ADMIN"] = "ADMIN";
    NotificationRole["STUDENT"] = "STUDENT";
    NotificationRole["PAYMENT"] = "PAYMENT";
    NotificationRole["TELECALLING"] = "TELECALLING";
})(NotificationRole || (exports.NotificationRole = NotificationRole = {}));
let NotificationEntity = class NotificationEntity {
    uuid;
    title;
    message;
    userId;
    type;
    Role;
    priority;
    isRead;
    CreateAt;
    UpdateAt;
};
exports.NotificationEntity = NotificationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NotificationEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NotificationEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NotificationEntity.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], NotificationEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NotificationType, default: NotificationType.INFO }),
    __metadata("design:type", String)
], NotificationEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NotificationRole, default: NotificationRole.PAYMENT }),
    __metadata("design:type", String)
], NotificationEntity.prototype, "Role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NotificationPriority, default: NotificationPriority.MEDIUM }),
    __metadata("design:type", String)
], NotificationEntity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], NotificationEntity.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], NotificationEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], NotificationEntity.prototype, "UpdateAt", void 0);
exports.NotificationEntity = NotificationEntity = __decorate([
    (0, typeorm_1.Entity)('notification')
], NotificationEntity);
//# sourceMappingURL=notify.js.map