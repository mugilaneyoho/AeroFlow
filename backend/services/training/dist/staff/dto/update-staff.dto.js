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
exports.UpdateStaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateStaffDto {
    email;
    staff_id;
    staff_name;
    phone_number;
    address;
    experience;
    employee_type;
    qualification;
    expertise;
}
exports.UpdateStaffDto = UpdateStaffDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mugilane@example.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'STAFF001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "staff_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mugilane' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "staff_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '9360096656' }),
    (0, class_validator_1.IsPhoneNumber)('IN'),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'keelkattalai, chennai, tamilnadu' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2' }),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "experience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Full Time' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "employee_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'B.Tech' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Backend development, NestJS' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "expertise", void 0);
//# sourceMappingURL=update-staff.dto.js.map