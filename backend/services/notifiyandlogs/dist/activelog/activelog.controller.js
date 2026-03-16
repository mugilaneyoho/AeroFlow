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
exports.ActivelogController = void 0;
const common_1 = require("@nestjs/common");
const activelog_service_1 = require("./activelog.service");
const microservices_1 = require("@nestjs/microservices");
let ActivelogController = class ActivelogController {
    activeLogService;
    constructor(activeLogService) {
        this.activeLogService = activeLogService;
    }
    handleActivityUpdate(message) {
        console.log('activelog received from kafka');
        console.log(message);
    }
    async create(body) {
        return this.activeLogService.create(body);
    }
    async findAll() {
        return this.activeLogService.findAll();
    }
    async findOne(uuid) {
        return this.activeLogService.findOne(uuid);
    }
    async update(uuid, body) {
        return this.activeLogService.update(uuid, body);
    }
    async remove(uuid) {
        return this.activeLogService.remove(uuid);
    }
};
exports.ActivelogController = ActivelogController;
__decorate([
    (0, microservices_1.EventPattern)('activelog.created'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActivelogController.prototype, "handleActivityUpdate", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActivelogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActivelogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActivelogController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ActivelogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActivelogController.prototype, "remove", null);
exports.ActivelogController = ActivelogController = __decorate([
    (0, common_1.Controller)('activelog'),
    __metadata("design:paramtypes", [activelog_service_1.ActivelogService])
], ActivelogController);
//# sourceMappingURL=activelog.controller.js.map