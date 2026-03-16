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
exports.StaffProfileEntity = void 0;
const typeorm_1 = require("typeorm");
const OfflineClass_entity_1 = require("./OfflineClass.entity");
const OnlineClass_entity_1 = require("./OnlineClass.entity");
let StaffProfileEntity = class StaffProfileEntity {
    id;
    uuid;
    staff_id;
    staff_name;
    phone_number;
    address;
    email;
    experience;
    employee_type;
    qualification;
    expertise;
    is_active = false;
    is_delete = false;
    createdAt;
    updatedAt;
    offline_class;
    online_class;
};
exports.StaffProfileEntity = StaffProfileEntity;
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, typeorm_1.Generated)('increment'),
    __metadata("design:type", Number)
], StaffProfileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "staff_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "staff_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "employee_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "qualification", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "expertise", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], StaffProfileEntity.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], StaffProfileEntity.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", String)
], StaffProfileEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OfflineClass_entity_1.OfflineClassesEntity, (classes) => classes.staff_id),
    __metadata("design:type", Array)
], StaffProfileEntity.prototype, "offline_class", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OnlineClass_entity_1.OnlineClassesEntity, (classes) => classes.staff_id),
    __metadata("design:type", Array)
], StaffProfileEntity.prototype, "online_class", void 0);
exports.StaffProfileEntity = StaffProfileEntity = __decorate([
    (0, typeorm_1.Entity)('staffprofile')
], StaffProfileEntity);
//# sourceMappingURL=staff.entity.js.map