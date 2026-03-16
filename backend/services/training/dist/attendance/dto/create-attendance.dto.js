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
exports.CreateAttendanceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const statusrecord_entity_1 = require("../../entities/statusrecord.entity");
class AttenRec {
    studentId;
    status;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'student uuid' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AttenRec.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: statusrecord_entity_1.StatusRecordEnum }),
    (0, class_validator_1.IsEnum)(statusrecord_entity_1.StatusRecordEnum),
    __metadata("design:type", String)
], AttenRec.prototype, "status", void 0);
class CreateAttendanceDto {
    classId;
    staffId;
    date;
    records;
}
exports.CreateAttendanceDto = CreateAttendanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'class uuid' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "classId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'staff uuid' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-06 16:58:45.130761' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateAttendanceDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AttenRec] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AttenRec),
    __metadata("design:type", Array)
], CreateAttendanceDto.prototype, "records", void 0);
//# sourceMappingURL=create-attendance.dto.js.map