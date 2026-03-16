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
exports.UpdateClassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateClassDto {
    batch_id;
    staff_id;
    subject;
    start_date;
    start_time;
    end_time;
    mode;
}
exports.UpdateClassDto = UpdateClassDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'batch uuid' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "batch_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'staff uuid' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "staff_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'javascript' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-06 16:58:45.130761' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateClassDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-06 16:58:45.130761' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateClassDto.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-02-06 16:58:45.130761' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateClassDto.prototype, "end_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'online' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "mode", void 0);
//# sourceMappingURL=update-class.dto.js.map