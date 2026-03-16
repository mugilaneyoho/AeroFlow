"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const staff_module_1 = require("./staff/staff.module");
const staff_entity_1 = require("./entities/staff.entity");
const OfflineClass_entity_1 = require("./entities/OfflineClass.entity");
const OnlineClass_entity_1 = require("./entities/OnlineClass.entity");
const classes_module_1 = require("./classes/classes.module");
const attendance_entity_1 = require("./entities/attendance.entity");
const statusrecord_entity_1 = require("./entities/statusrecord.entity");
const attendance_module_1 = require("./attendance/attendance.module");
const bull_1 = require("@nestjs/bull");
const queue_module_1 = require("./queue/queue.module");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const role_guard_1 = require("./role/role.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgresql://patron_727o_user:vNL871u0UdD5lEwe01ZqngnTCDgO7NtE@dpg-d6bvqg7tn9qs73c7qcqg-a.singapore-postgres.render.com/patron_727o',
                ssl: {
                    rejectUnauthorized: false,
                },
                entities: [
                    staff_entity_1.StaffProfileEntity,
                    OfflineClass_entity_1.OfflineClassesEntity,
                    OnlineClass_entity_1.OnlineClassesEntity,
                    attendance_entity_1.AttendanceEntity,
                    statusrecord_entity_1.StatusRecordEntity,
                ],
                synchronize: true,
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'common',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: 'common',
                        protoPath: (0, path_1.join)(__dirname, './proto/common.proto'),
                        url: `0.0.0.0:${process.env.INSTITUTE_GRPC}`,
                    },
                },
            ]),
            typeorm_1.TypeOrmModule.forFeature([
                OnlineClass_entity_1.OnlineClassesEntity,
                OfflineClass_entity_1.OfflineClassesEntity,
                staff_entity_1.StaffProfileEntity,
                attendance_entity_1.AttendanceEntity,
                statusrecord_entity_1.StatusRecordEntity,
            ]),
            bull_1.BullModule.forRoot({
                redis: {
                    host: 'localhost',
                    port: 6378,
                },
            }),
            staff_module_1.StaffModule,
            classes_module_1.ClassesModule,
            attendance_module_1.AttendanceModule,
            queue_module_1.QueueModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: role_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map