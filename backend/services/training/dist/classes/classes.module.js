"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesModule = void 0;
const common_1 = require("@nestjs/common");
const classes_controller_1 = require("./classes.controller");
const classes_service_1 = require("./classes.service");
const typeorm_1 = require("@nestjs/typeorm");
const OfflineClass_entity_1 = require("../entities/OfflineClass.entity");
const OnlineClass_entity_1 = require("../entities/OnlineClass.entity");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const config_2 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
let ClassesModule = class ClassesModule {
};
exports.ClassesModule = ClassesModule;
exports.ClassesModule = ClassesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_2.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([OfflineClass_entity_1.OfflineClassesEntity, OnlineClass_entity_1.OnlineClassesEntity]),
            microservices_1.ClientsModule.register([
                {
                    name: 'course',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: 'course',
                        protoPath: (0, path_1.join)(__dirname, '../proto/course.proto'),
                        url: `0.0.0.0:${process.env.INSTITUTE_GRPC}`,
                    },
                },
                {
                    name: 'batch',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: 'batch',
                        protoPath: (0, path_1.join)(__dirname, '../proto/batch.proto'),
                        url: `0.0.0.0:${process.env.INSTITUTE_GRPC}`,
                    },
                },
            ]),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: "KAFKA_PRODUCER_SERVICE",
                    useFactory: (ConfigService) => ({
                        transport: microservices_1.Transport.KAFKA,
                        options: {
                            client: {
                                clientId: 'classes_producer',
                                brokers: ConfigService.get('KAFKA_BROKER')?.split(',') || ['localhost:9092'],
                            },
                            producer: {
                                allowAutoTopicCreation: true,
                            },
                        },
                    }),
                    inject: [config_1.ConfigService]
                }
            ])
        ],
        controllers: [classes_controller_1.ClassesController],
        providers: [classes_service_1.ClassesService, common_1.Logger],
    })
], ClassesModule);
//# sourceMappingURL=classes.module.js.map