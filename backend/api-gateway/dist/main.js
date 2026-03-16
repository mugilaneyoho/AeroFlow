"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_proxy_middleware_1 = require("http-proxy-middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
    });
    app.use('/auth', (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite: {
            '^/auth': '',
        },
    }));
    await app.listen(process.env.PORT ?? 3000);
    return app;
}
void bootstrap();
//# sourceMappingURL=main.js.map