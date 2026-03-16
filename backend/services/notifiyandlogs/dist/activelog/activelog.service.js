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
exports.ActivelogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const activitylog_1 = require("../entity/activitylog");
const typeorm_2 = require("typeorm");
let ActivelogService = class ActivelogService {
    logRepo;
    constructor(logRepo) {
        this.logRepo = logRepo;
    }
    async create(data) {
        try {
            const res = this.logRepo.create(data);
            return await this.logRepo.save(res);
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAll() {
        try {
            return await this.logRepo.find();
        }
        catch (error) {
            console.error(error);
        }
    }
    async findOne(uuid) {
        const data = await this.logRepo.findOneBy({ uuid });
        if (!data) {
            throw new common_1.HttpException('Activity log not found', common_1.HttpStatus.NOT_FOUND);
        }
        return data;
    }
    async update(uuid, data) {
        const res = await this.logRepo.findOneBy({ uuid });
        if (!res) {
            throw new common_1.HttpException('Activity log not found', common_1.HttpStatus.NOT_FOUND);
        }
        Object.assign(res, data);
        return await this.logRepo.save(res);
    }
    async remove(uuid) {
        const res = await this.logRepo.findOneBy({ uuid });
        if (!res) {
            throw new common_1.HttpException('Activity log not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.logRepo.remove(res);
        return {
            success: true,
            message: 'Activity log deleted successfully',
        };
    }
};
exports.ActivelogService = ActivelogService;
exports.ActivelogService = ActivelogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(activitylog_1.ActivityLogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActivelogService);
//# sourceMappingURL=activelog.service.js.map