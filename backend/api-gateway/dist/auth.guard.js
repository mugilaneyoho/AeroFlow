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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const app_service_1 = require("./app.service");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
let AuthGard = class AuthGard {
    jwtService;
    appService;
    http;
    constructor(jwtService, appService, http) {
        this.jwtService = jwtService;
        this.appService = appService;
        this.http = http;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization'];
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const decode = await this.jwtService.verifyAsync(token);
            const { data } = await (0, rxjs_1.firstValueFrom)(this.http.request({
                url: `http://localhost:3002/roles/${decode.role_id}`,
                method: 'GET',
            }));
            request['user'] = JSON.stringify({ ...decode, role: data.role });
            return true;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthGard = AuthGard;
exports.AuthGard = AuthGard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        app_service_1.AppService,
        axios_1.HttpService])
], AuthGard);
//# sourceMappingURL=auth.guard.js.map