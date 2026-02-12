import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ['telecaller_auth', 'staff'],
      protoPath: [
        join(__dirname, './proto/telecalling.proto'),
        join(__dirname, './proto/staff.proto'),
      ],
      url: `0.0.0.0:50051`,
    },
  });

  await app.startAllMicroservices();

  const config = new DocumentBuilder()
    .setTitle('Authentication')
    .setDescription('API Document for authentication service')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
void bootstrap();
