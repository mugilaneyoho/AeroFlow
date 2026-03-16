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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    serviceRoutes = [
        { path: '/institute', target: 'http://localhost:3004' },
        { path: '/telecalling', target: 'http://localhost:3006' },
        { path: '/training', target: 'http://localhost:3008' },
    ];
    async proxyAll(req, res) {
        console.log('Req CLECOB', req.path);
        const route = this.serviceRoutes.find((r) => req.path.startsWith(r.path));
        if (!route) {
            return res.status(404).json({ message: 'Route not found in gateway' });
        }
        const strippedPath = req.path.replace(route.path, '');
        const targetURL = route.target + strippedPath;
        console.log('TargetURL', targetURL);
        try {
            const result = await this.appService.forwardRequest(targetURL, req.method, req.body, req.user);
            return res.json(result.data);
        }
        catch (error) {
            return res
                .status(error.response?.status || 500)
                .json(error.response?.data || error);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.All)('*'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "proxyAll", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map