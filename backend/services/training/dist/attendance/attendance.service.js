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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attendance_entity_1 = require("../entities/attendance.entity");
const statusrecord_entity_1 = require("../entities/statusrecord.entity");
const typeorm_2 = require("typeorm");
const bull_1 = require("@nestjs/bull");
let AttendanceService = class AttendanceService {
    attendanceRepo;
    statusRepo;
    queue;
    constructor(attendanceRepo, statusRepo, queue) {
        this.attendanceRepo = attendanceRepo;
        this.statusRepo = statusRepo;
        this.queue = queue;
    }
    async create(data) {
        try {
            const count = {
                present: 0,
                absent: 0,
            };
            for (const status of data.records) {
                const d = status.status == statusrecord_entity_1.StatusRecordEnum.PRESENT
                    ? (count['present'] = count['present'] + 1)
                    : (count['absent'] = count['absent'] + 1);
            }
            const attendance = this.attendanceRepo.create({
                classId: data.classId,
                staffId: data.staffId,
                date: data.date,
                present_count: count.present,
                absent_count: count.absent,
            });
            const update = await this.attendanceRepo.save(attendance);
            for (const status of data.records) {
                await this.queue.add('assign', {
                    attendanceId: update.uuid,
                    studentId: status.studentId,
                    status: status.status,
                });
            }
            return {
                success: true,
                message: 'attendance uploaded',
            };
        }
        catch (error) {
            console.log(error, 'attendance error!.');
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'internal server error.',
            });
        }
    }
    async findAll(classId) {
        try {
            const data = await this.attendanceRepo.find({ where: { classId } });
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
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendance_entity_1.AttendanceEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(statusrecord_entity_1.StatusRecordEntity)),
    __param(2, (0, bull_1.InjectQueue)('attendance-status')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository, Object])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map