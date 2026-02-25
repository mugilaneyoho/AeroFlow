import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffProfileEntity } from 'src/entities/staff.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { OnlineClassesEntity } from 'src/entities/OnlineClass.entity';
import { OfflineClassesEntity } from 'src/entities/OfflineClass.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StaffProfileEntity,
      OnlineClassesEntity,
      OfflineClassesEntity,
    ]),
    ClientsModule.register([
      {
        name: 'staff',
        transport: Transport.GRPC,
        options: {
          package: 'staff',
          protoPath: join(__dirname, '../proto/staff.proto'),
          url: '0.0.0.0:3001',
        },
      },
    ]),
  ],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
