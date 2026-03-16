"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('training')
        .setDescription('API document for training service')
        .setVersion('1.0')
        .build();
    const docuemnt = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, docuemnt);
    await app.listen(process.env.PORT ?? 3008);
}
void bootstrap();
//# sourceMappingURL=main.js.map