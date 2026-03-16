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
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const OfflineClass_entity_1 = require("../entities/OfflineClass.entity");
const OnlineClass_entity_1 = require("../entities/OnlineClass.entity");
const typeorm_2 = require("typeorm");
const rxjs_1 = require("rxjs");
const microservices = __importStar(require("@nestjs/microservices"));
let ClassesService = class ClassesService {
    offlineRepo;
    onlineRepo;
    clientBatch;
    kafkaclient;
    logger;
    batchService;
    constructor(offlineRepo, onlineRepo, clientBatch, kafkaclient, logger) {
        this.offlineRepo = offlineRepo;
        this.onlineRepo = onlineRepo;
        this.clientBatch = clientBatch;
        this.kafkaclient = kafkaclient;
        this.logger = logger;
    }
    async handleClassStart() {
        console.log('cron running');
        const classes = await this.offlineRepo.find();
        const current = Date.now();
        const beforeTime = current + 5 * 60 * 1000;
        console.log(`neww data  `, classes);
        for (const classData of classes) {
            const startTime = new Date(classData.start_time).getTime();
            console.log(classData.start_time);
            if (startTime >= current && startTime <= beforeTime) {
                console.log('Class Started emit data');
                console.log({
                    uuid: classData.uuid,
                    subject: classData.subject,
                    batch_name: classData.batch_name,
                    start_time: classData.start_time,
                });
                this.kafkaclient.emit('class_started', {
                    uuid: classData.uuid,
                    subject: classData.subject,
                    batch_name: classData.batch_name,
                    start_time: classData.start_time,
                });
                console.log(`class_started uuid ${classData.uuid}`);
                console.log;
            }
        }
    }
    async onModuleInit() {
        this.batchService = this.clientBatch.getService('BatchService');
        try {
            await this.kafkaclient.connect();
            this.logger.log('kafka producer connected successfully');
        }
        catch (error) {
            this.logger.error('kafka producer connection faild', error);
        }
    }
    async onmoduleDestroy() {
        try {
            await this.kafkaclient.close();
        }
        catch (error) {
            this.logger.error('kafka producer disconnect', error);
        }
    }
    selectMode(mode) {
        if (mode === 'ONLINE') {
            return this.onlineRepo;
        }
        else if (mode === 'OFFLINE') {
            return this.offlineRepo;
        }
        else {
            throw new common_1.NotFoundException('pass right class mode');
        }
    }
    async create(data) {
        try {
            const grpc_batch = await (0, rxjs_1.lastValueFrom)(this.batchService.GetById({
                batchid: data.batch_id,
            }));
            if (!grpc_batch.success) {
                console.error('grpc staff profile error.');
                return new common_1.InternalServerErrorException({
                    success: false,
                    message: 'internal server error.',
                });
            }
            const classRepo = this.selectMode(grpc_batch.data?.batchMode);
            const classData = classRepo.create({
                ...data,
                class_mode: grpc_batch.data?.batchMode.toLowerCase(),
                batch_name: grpc_batch.data.batchName,
                total_student: grpc_batch.data?.totalStudent,
            });
            const final = await classRepo.save(classData);
            return {
                success: true,
                message: 'class create successfully.',
                data: final,
            };
        }
        catch (error) {
            console.error(error, 'create class error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async findOne(uuid, mode) {
        try {
            const classRepo = this.selectMode(mode);
            const data = await classRepo.findOne({
                where: { uuid },
            });
            if (!data) {
                return new common_1.NotFoundException('no classes available');
            }
            const grpc_res = await (0, rxjs_1.lastValueFrom)(this.batchService.GetById({ batchid: data.batch_id }));
            console.log(grpc_res, 'check');
            return {
                success: true,
                message: 'data fetched',
                data,
            };
        }
        catch (error) {
            console.error(error, 'find class error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async findAll(query, uuid) {
        try {
            const page = Number(query.page) || 1;
            const limit = Number(query.limit) || 5;
            const classtype = query.classtype;
            const nowDate = new Date();
            let filter;
            if (classtype === 'ongoing') {
                filter = {
                    where: {
                        is_delete: false,
                        staff_id: uuid,
                        start_date: (0, typeorm_2.MoreThan)(nowDate),
                    },
                    skip: (page - 1) * limit,
                    take: limit,
                    order: { createdAt: 'DESC' },
                    relations: ['staff'],
                };
            }
            else if (classtype === 'completed') {
                filter = {
                    where: {
                        is_delete: false,
                        staff_id: uuid,
                        start_date: (0, typeorm_2.LessThan)(nowDate),
                        end_time: (0, typeorm_2.LessThan)(nowDate),
                    },
                    skip: (page - 1) * limit,
                    take: limit,
                    order: { createdAt: 'DESC' },
                    relations: ['staff'],
                };
            }
            else {
                filter = {};
                return {
                    success: false,
                    message: 'query is worng',
                };
            }
            const [online, onlinTotal] = await this.onlineRepo.findAndCount(filter);
            const [offline, offlineTotal] = await this.offlineRepo.findAndCount(filter);
            const total = onlinTotal + offlineTotal;
            const classes = [...online, ...offline];
            return {
                success: true,
                message: 'classes fecthed',
                data: classes,
                meta: {
                    total,
                    page,
                    limit: limit * 2,
                    totalPages: Math.ceil(total / (limit * 2)),
                },
            };
        }
        catch (error) {
            console.error(error, 'create class error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async deleteOne(uuid, mode) {
        try {
            const classRepo = this.selectMode(mode);
            await classRepo.update({ uuid }, { is_delete: true });
            return {
                success: true,
                message: 'class deleted successfully.',
            };
        }
        catch (error) {
            console.error(error, 'find class error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
    async update(uuid, data, mode) {
        try {
            const classRepo = this.selectMode(mode);
            const classes = await classRepo.findOne({ where: { uuid } });
            if (!classes) {
                return new common_1.NotFoundException({
                    success: false,
                    message: 'classes not founded.',
                });
            }
            Object.assign(classes, data);
            await classRepo.save(classes);
        }
        catch (error) {
            console.error(error, 'find class error');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error',
            });
        }
    }
};
exports.ClassesService = ClassesService;
__decorate([
    (0, schedule_1.Cron)('* * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassesService.prototype, "handleClassStart", null);
exports.ClassesService = ClassesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OfflineClass_entity_1.OfflineClassesEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(OnlineClass_entity_1.OnlineClassesEntity)),
    __param(2, (0, common_1.Inject)('batch')),
    __param(3, (0, common_1.Inject)('KAFKA_PRODUCER_SERVICE')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository, Object, microservices.ClientKafka, common_1.Logger])
], ClassesService);
//# sourceMappingURL=classes.service.js.map