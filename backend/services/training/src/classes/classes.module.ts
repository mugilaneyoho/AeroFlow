import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfflineClassesEntity } from 'src/entities/OfflineClass.entity';
import { OnlineClassesEntity } from 'src/entities/OnlineClass.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([OfflineClassesEntity, OnlineClassesEntity]),
    ClientsModule.register([
      {
        name: 'course',
        transport: Transport.GRPC,
        options: {
          package: 'course',
          protoPath: join(__dirname, '../proto/course.proto'),
          url: '0.0.0.0:3003',
        },
      },
      {
        name: 'batch',
        transport: Transport.GRPC,
        options: {
          package: 'batch',
          protoPath: join(__dirname, '../proto/batch.proto'),
          url: '0.0.0.0:3003',
        },
      },
    ]),
  ],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
