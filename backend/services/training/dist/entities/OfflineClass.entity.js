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
exports.OfflineClassesEntity = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("./staff.entity");
let OfflineClassesEntity = class OfflineClassesEntity {
    id;
    uuid;
    batch_id;
    staff_id;
    staff;
    subject;
    start_date;
    start_time;
    end_time;
    batch_name;
    class_mode;
    total_student;
    present_student;
    is_delete;
    createdAt;
    updatedAt;
};
exports.OfflineClassesEntity = OfflineClassesEntity;
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, typeorm_1.Generated)('increment'),
    __metadata("design:type", Number)
], OfflineClassesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OfflineClassesEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], OfflineClassesEntity.prototype, "batch_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], OfflineClassesEntity.prototype, "staff_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.StaffProfileEntity, (staff) => staff.offline_class),
    __metadata("design:type", staff_entity_1.StaffProfileEntity)
], OfflineClassesEntity.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OfflineClassesEntity.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], OfflineClassesEntity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], OfflineClassesEntity.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], OfflineClassesEntity.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OfflineClassesEntity.prototype, "batch_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: 'offline' }),
    __metadata("design:type", String)
], OfflineClassesEntity.prototype, "class_mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], OfflineClassesEntity.prototype, "total_student", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], OfflineClassesEntity.prototype, "present_student", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], OfflineClassesEntity.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], OfflineClassesEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], OfflineClassesEntity.prototype, "updatedAt", void 0);
exports.OfflineClassesEntity = OfflineClassesEntity = __decorate([
    (0, typeorm_1.Entity)('offlineclasses')
], OfflineClassesEntity);
//# sourceMappingURL=OfflineClass.entity.js.map