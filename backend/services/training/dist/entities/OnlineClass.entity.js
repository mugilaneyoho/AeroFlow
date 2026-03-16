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
exports.OnlineClassesEntity = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("./staff.entity");
let OnlineClassesEntity = class OnlineClassesEntity {
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
exports.OnlineClassesEntity = OnlineClassesEntity;
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, typeorm_1.Generated)('increment'),
    __metadata("design:type", Number)
], OnlineClassesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OnlineClassesEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], OnlineClassesEntity.prototype, "batch_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], OnlineClassesEntity.prototype, "staff_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.StaffProfileEntity, (staff) => staff.online_class),
    __metadata("design:type", staff_entity_1.StaffProfileEntity)
], OnlineClassesEntity.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OnlineClassesEntity.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], OnlineClassesEntity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], OnlineClassesEntity.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], OnlineClassesEntity.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OnlineClassesEntity.prototype, "batch_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: 'online' }),
    __metadata("design:type", String)
], OnlineClassesEntity.prototype, "class_mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], OnlineClassesEntity.prototype, "total_student", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], OnlineClassesEntity.prototype, "present_student", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], OnlineClassesEntity.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], OnlineClassesEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], OnlineClassesEntity.prototype, "updatedAt", void 0);
exports.OnlineClassesEntity = OnlineClassesEntity = __decorate([
    (0, typeorm_1.Entity)('onlineclasses')
], OnlineClassesEntity);
//# sourceMappingURL=OnlineClass.entity.js.map