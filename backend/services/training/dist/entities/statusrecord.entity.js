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
exports.StatusRecordEntity = exports.StatusRecordEnum = void 0;
const typeorm_1 = require("typeorm");
const attendance_entity_1 = require("./attendance.entity");
var StatusRecordEnum;
(function (StatusRecordEnum) {
    StatusRecordEnum["PRESENT"] = "PRESENT";
    StatusRecordEnum["ABSENT"] = "ABSENT";
})(StatusRecordEnum || (exports.StatusRecordEnum = StatusRecordEnum = {}));
let StatusRecordEntity = class StatusRecordEntity {
    id;
    uuid;
    attendanceId;
    studentId;
    status;
    createdAt;
    updatedAt;
    attendance;
};
exports.StatusRecordEntity = StatusRecordEntity;
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, typeorm_1.Generated)('increment'),
    __metadata("design:type", Number)
], StatusRecordEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StatusRecordEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], StatusRecordEntity.prototype, "attendanceId", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], StatusRecordEntity.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusRecordEnum, nullable: false }),
    __metadata("design:type", String)
], StatusRecordEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], StatusRecordEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], StatusRecordEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => attendance_entity_1.AttendanceEntity, (attendance) => attendance.records),
    __metadata("design:type", attendance_entity_1.AttendanceEntity)
], StatusRecordEntity.prototype, "attendance", void 0);
exports.StatusRecordEntity = StatusRecordEntity = __decorate([
    (0, typeorm_1.Entity)('statusrecord')
], StatusRecordEntity);
//# sourceMappingURL=statusrecord.entity.js.map