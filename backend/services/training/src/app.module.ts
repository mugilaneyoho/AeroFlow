import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from './staff/staff.module';
import { StaffProfileEntity } from './entities/staff.entity';
import { OfflineClassesEntity } from './entities/OfflineClass.entity';
import { OnlineClassesEntity } from './entities/OnlineClass.entity';
import { ClassesModule } from './classes/classes.module';
import { AttendanceEntity } from './entities/attendance.entity';
import { StatusRecordEntity } from './entities/statusrecord.entity';
import { AttendanceModule } from './attendance/attendance.module';
import { BullModule } from '@nestjs/bull';
import { QueueModule } from './queue/queue.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        StaffProfileEntity,
        OfflineClassesEntity,
        OnlineClassesEntity,
        AttendanceEntity,
        StatusRecordEntity,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([AttendanceEntity, StatusRecordEntity]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6378,
      },
    }),
    StaffModule,
    ClassesModule,
    AttendanceModule,
    QueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
