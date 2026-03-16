"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivelogModule = void 0;
const common_1 = require("@nestjs/common");
const activelog_controller_1 = require("./activelog.controller");
const activelog_service_1 = require("./activelog.service");
const typeorm_1 = require("@nestjs/typeorm");
const activitylog_1 = require("../entity/activitylog");
const microservices_1 = require("@nestjs/microservices");
let ActivelogModule = class ActivelogModule {
};
exports.ActivelogModule = ActivelogModule;
exports.ActivelogModule = ActivelogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activitylog_1.ActivityLogEntity]),
            microservices_1.ClientsModule.register([
                {
                    name: 'KAFKA_CLIENT',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'notifyandlog',
                            brokers: ['localhost:9092']
                        },
                        consumer: {
                            groupId: 'notifyandlog-consumer'
                        },
                    },
                },
            ]),
        ],
        controllers: [activelog_controller_1.ActivelogController],
        providers: [activelog_service_1.ActivelogService],
    })
], ActivelogModule);
//# sourceMappingURL=activelog.module.js.map