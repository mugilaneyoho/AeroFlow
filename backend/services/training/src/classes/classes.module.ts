import { Logger, Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfflineClassesEntity } from 'src/entities/OfflineClass.entity';
import { OnlineClassesEntity } from 'src/entities/OnlineClass.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forFeature([OfflineClassesEntity, OnlineClassesEntity]),
    ClientsModule.register([
      {
        name: 'course',
        transport: Transport.GRPC,
        options: {
          package: 'course',
          protoPath: join(__dirname, '../proto/course.proto'),
          url: `0.0.0.0:${process.env.INSTITUTE_GRPC}`,
        },
      },
      {
        name: 'batch',
        transport: Transport.GRPC,
        options: {
          package: 'batch',
          protoPath: join(__dirname, '../proto/batch.proto'),
          url: `0.0.0.0:${process.env.INSTITUTE_GRPC}`,
        },
      },
    ]),

    ClientsModule.registerAsync([
      {
        name: "KAFKA_PRODUCER_SERVICE",
        useFactory:(ConfigService: ConfigService) => ({
          transport: Transport.KAFKA,
          Option: {
            client: {
              clientId: 'classes_producer',
              brokers: ConfigService.get<string>('KAFKA_BROKER')?.split(','),
            },
            producer: {
              allowAutoTopicCreation: true,
            },
          },
        }),
        inject: [ConfigService]
      }
    ])
  ],
  controllers: [ClassesController],
  providers: [ClassesService, Logger],
})
export class ClassesModule {}
