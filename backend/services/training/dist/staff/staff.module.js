"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffModule = void 0;
const common_1 = require("@nestjs/common");
const staff_controller_1 = require("./staff.controller");
const staff_service_1 = require("./staff.service");
const typeorm_1 = require("@nestjs/typeorm");
const staff_entity_1 = require("../entities/staff.entity");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const OnlineClass_entity_1 = require("../entities/OnlineClass.entity");
const OfflineClass_entity_1 = require("../entities/OfflineClass.entity");
const config_1 = require("@nestjs/config");
let StaffModule = class StaffModule {
};
exports.StaffModule = StaffModule;
exports.StaffModule = StaffModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forFeature([
                staff_entity_1.StaffProfileEntity,
                OnlineClass_entity_1.OnlineClassesEntity,
                OfflineClass_entity_1.OfflineClassesEntity,
            ]),
            microservices_1.ClientsModule.register([
                {
                    name: 'staff',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: 'staff',
                        protoPath: (0, path_1.join)(__dirname, '../proto/staff.proto'),
                        url: `0.0.0.0:${process.env.AUTH_GRPC}`,
                    },
                },
            ]),
        ],
        controllers: [staff_controller_1.StaffController],
        providers: [staff_service_1.StaffService],
    })
], StaffModule);
//# sourceMappingURL=staff.module.js.map