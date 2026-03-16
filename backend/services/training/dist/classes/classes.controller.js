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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesController = void 0;
const common_1 = require("@nestjs/common");
const classes_service_1 = require("./classes.service");
const create_class_dto_1 = require("./dto/create-class.dto");
const update_class_dto_1 = require("./dto/update-class.dto");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
let ClassesController = class ClassesController {
    classService;
    constructor(classService) {
        this.classService = classService;
    }
    create(data) {
        return this.classService.create(data);
    }
    findAll(query) {
        return this.classService.findAll(query);
    }
    findbystaff(uuid, query) {
        return this.classService.findAll(query, uuid);
    }
    update(data, param) {
        return this.classService.update(param.uuid, data, param.mode);
    }
    findOne(param) {
        return this.classService.findOne(param.uuid, param.mode);
    }
    deleteone(param) {
        return this.classService.deleteOne(param.uuid, param.mode);
    }
};
exports.ClassesController = ClassesController;
__decorate([
    (0, role_decorator_1.Roles)([role_enum_1.Role.HOD]),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_dto_1.CreateClassDto]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('staff/:staffid'),
    __param(0, (0, common_1.Param)('staffid')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "findbystaff", null);
__decorate([
    (0, role_decorator_1.Roles)([role_enum_1.Role.HOD]),
    (0, common_1.Put)('update/:uuid/:mode'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_class_dto_1.UpdateClassDto, Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':uuid/:mode'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)([role_enum_1.Role.HOD]),
    (0, common_1.Delete)(':uuid/:mode'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "deleteone", null);
exports.ClassesController = ClassesController = __decorate([
    (0, common_1.Controller)('classes'),
    __metadata("design:paramtypes", [classes_service_1.ClassesService])
], ClassesController);
//# sourceMappingURL=classes.controller.js.map