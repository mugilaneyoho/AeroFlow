import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ['course', 'batch'],
      protoPath: [
        join(__dirname, './proto/course.proto'),
        join(__dirname, './proto/batch.proto'),
      ],
      url: `0.0.0.0:${process.env.PORT_GRPC}`,
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3006);
}
void bootstrap();
