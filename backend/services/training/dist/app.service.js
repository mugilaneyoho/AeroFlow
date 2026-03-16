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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OnlineClass_entity_1 = require("./entities/OnlineClass.entity");
const typeorm_2 = require("typeorm");
const OfflineClass_entity_1 = require("./entities/OfflineClass.entity");
const staff_entity_1 = require("./entities/staff.entity");
const rxjs_1 = require("rxjs");
const microservices = __importStar(require("@nestjs/microservices"));
let AppService = class AppService {
    onlineRepo;
    offlineRepo;
    staffRepo;
    client;
    CommonService;
    constructor(onlineRepo, offlineRepo, staffRepo, client) {
        this.onlineRepo = onlineRepo;
        this.offlineRepo = offlineRepo;
        this.staffRepo = staffRepo;
        this.client = client;
    }
    getHello() {
        return 'Training service Running..';
    }
    onModuleInit() {
        this.CommonService = this.client.getService('CommonService');
    }
    async AdminDashboard() {
        try {
            const nowDate = new Date();
            const DayAfter = new Date();
            DayAfter.setDate(DayAfter.getDate() + 1);
            const staffcount = await this.staffRepo.count({
                where: { is_delete: false },
            });
            const [onlineClass, onlinetotal] = await this.onlineRepo.findAndCount({
                where: { start_date: (0, typeorm_2.Between)(nowDate, DayAfter), is_delete: false },
            });
            const [offlineClass, offlinetotal] = await this.offlineRepo.findAndCount({
                where: { start_date: (0, typeorm_2.Between)(nowDate, DayAfter), is_delete: false },
            });
            const grpc_res = await (0, rxjs_1.lastValueFrom)(this.CommonService.FetchDashBoard({ data: 'string' }));
            console.log(grpc_res, 'grpc res');
            return {
                staffcount,
                onlineClass,
                offlineClass,
                onlineClassCount: onlinetotal,
                offlineClassCount: offlinetotal,
                ...grpc_res,
            };
        }
        catch (error) {
            console.error(error, 'admin dashboard error.');
            throw new common_1.InternalServerErrorException('internal server error.');
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OnlineClass_entity_1.OnlineClassesEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(OfflineClass_entity_1.OfflineClassesEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(staff_entity_1.StaffProfileEntity)),
    __param(3, (0, common_1.Inject)('common')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository, Object])
], AppService);
//# sourceMappingURL=app.service.js.map