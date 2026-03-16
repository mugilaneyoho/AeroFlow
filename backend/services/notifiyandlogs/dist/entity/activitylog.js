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
exports.ActivityLogEntity = exports.ActivityStatus = exports.ActivityType = void 0;
const typeorm_1 = require("typeorm");
var ActivityType;
(function (ActivityType) {
    ActivityType["CREATE"] = "CREATE";
    ActivityType["UPDATE"] = "UPDATE";
    ActivityType["DELETE"] = "DELETE";
    ActivityType["PAYMENT"] = "PAYMENT";
    ActivityType["REFUND"] = "REFUND";
})(ActivityType || (exports.ActivityType = ActivityType = {}));
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus["SUCCESS"] = "SUCCESS";
    ActivityStatus["FAILED"] = "FAILED";
    ActivityStatus["PENDING"] = "PENDING";
})(ActivityStatus || (exports.ActivityStatus = ActivityStatus = {}));
let ActivityLogEntity = class ActivityLogEntity {
    uuid;
    description;
    type;
    status;
    performedBy;
    relatedEntity;
    createdAt;
    updatedAt;
};
exports.ActivityLogEntity = ActivityLogEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ActivityLogEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ActivityLogEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ActivityType }),
    __metadata("design:type", String)
], ActivityLogEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ActivityStatus, default: ActivityStatus.PENDING }),
    __metadata("design:type", String)
], ActivityLogEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ActivityLogEntity.prototype, "performedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ActivityLogEntity.prototype, "relatedEntity", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], ActivityLogEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], ActivityLogEntity.prototype, "updatedAt", void 0);
exports.ActivityLogEntity = ActivityLogEntity = __decorate([
    (0, typeorm_1.Entity)('activitylog')
], ActivityLogEntity);
//# sourceMappingURL=activitylog.js.map