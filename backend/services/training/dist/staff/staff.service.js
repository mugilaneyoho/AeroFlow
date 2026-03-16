"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const staff_entity_1 = require("../entities/staff.entity");
const typeorm_2 = require("typeorm");
const rxjs_1 = require("rxjs");
const microservices = __importStar(require("@nestjs/microservices"));
const OfflineClass_entity_1 = require("../entities/OfflineClass.entity");
const OnlineClass_entity_1 = require("../entities/OnlineClass.entity");
let StaffService = class StaffService {
    staffRepo;
    offlineRepo;
    onlineRepo;
    client;
    AuthService;
    constructor(staffRepo, offlineRepo, onlineRepo, client) {
        this.staffRepo = staffRepo;
        this.offlineRepo = offlineRepo;
        this.onlineRepo = onlineRepo;
        this.client = client;
    }
    onModuleInit() {
        this.AuthService = this.client.getService('StaffService');
    }
    async create(data) {
        try {
            const exits = await this.staffRepo.findOne({
                where: { email: data.email },
            });
            if (exits) {
                return new common_1.ConflictException({
                    success: false,
                    message: 'user already exist this email.',
                });
            }
            const user = this.staffRepo.create(data);
            const staff = await this.staffRepo.save(user);
            const grpc_res = await (0, rxjs_1.lastValueFrom)(this.AuthService.CreateStaff({
                email: staff.email,
                password: data.password,
                profileId: staff.uuid,
            }));
            if (!grpc_res.success) {
                console.error('grpc staff profile error.');
                return new common_1.InternalServerErrorException({
                    success: false,
                    message: 'internal server error.',
                });
            }
            return {
                success: true,
                message: 'profile created successfully',
                data: staff,
            };
        }
        catch (error) {
            console.error(error, 'create staff error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async findAll(query) {
        try {
            const page = Number(query.page) || 1;
            const limit = Number(query.limit) || 10;
            const [staffs, total] = await this.staffRepo.findAndCount({
                where: { is_delete: false },
                skip: (page - 1) * limit,
                take: limit,
                order: { createdAt: 'DESC' },
            });
            return {
                success: true,
                message: 'staff fetched',
                data: staffs,
                meta: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                },
            };
        }
        catch (error) {
            console.error(error, 'create staff error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async findOne(uuid) {
        try {
            const staff = await this.staffRepo.findOne({
                where: { uuid },
            });
            return {
                success: true,
                message: 'staff fetched',
                data: staff,
            };
        }
        catch (error) {
            console.error(error, 'find staff error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async deleteOne(uuid) {
        try {
            await this.staffRepo.update({ uuid }, { is_delete: true });
            return {
                success: true,
                message: 'staff deleted successfully.',
            };
        }
        catch (error) {
            console.error(error, 'delete staff error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async update(uuid, data) {
        try {
            const exist = await this.staffRepo.findOne({ where: { uuid } });
            if (!exist) {
                return new common_1.NotFoundException({
                    success: false,
                    message: 'classes not founded.',
                });
            }
            Object.assign(exist, data);
            const staff = await this.staffRepo.save(exist);
            return {
                staff,
            };
        }
        catch (error) {
            console.error(error, 'update staff error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async dashboard() {
        try {
            const nowDate = new Date();
            const dayStart = new Date(nowDate);
            dayStart.setDate(dayStart.getDate() - 1);
            dayStart.setHours(0, 0, 0, 0);
            const dayEnd = new Date(nowDate);
            dayEnd.setDate(dayEnd.getDate() - 1);
            dayEnd.setHours(23, 59, 59, 999);
            const online = await this.onlineRepo.find({
                where: { start_date: (0, typeorm_2.And)((0, typeorm_2.MoreThan)(dayStart), (0, typeorm_2.LessThan)(dayEnd)) },
            });
            const offline = await this.offlineRepo.find({
                where: { start_date: (0, typeorm_2.And)((0, typeorm_2.MoreThan)(dayStart), (0, typeorm_2.LessThan)(dayEnd)) },
            });
            const todayclasses = [...online, ...offline];
            return {
                todayclasses,
            };
        }
        catch (error) {
            console.error(error, 'staff dashboard error');
        }
    }
};
exports.StaffService = StaffService;
exports.StaffService = StaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staff_entity_1.StaffProfileEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(OfflineClass_entity_1.OfflineClassesEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(OnlineClass_entity_1.OnlineClassesEntity)),
    __param(3, (0, common_1.Inject)('staff')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository, Object])
], StaffService);
//# sourceMappingURL=staff.service.js.map