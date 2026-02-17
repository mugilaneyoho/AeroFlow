import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';
import { QueueModule } from './queue/queue.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadsEntity } from './entities/leads.entity';
import { BullModule } from '@nestjs/bull';
import { EmployeeModule } from './employee/employee.module';
import { EmployeEntity } from './entities/employee.entity';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://patron_2whd_user:UVa7zf8WHQFqsXBQmFcGRbBboFr1ubsh@dpg-d65csker433s73evgaj0-a.singapore-postgres.render.com/patron_2whd',
      ssl: {
        rejectUnauthorized: false,
      },
      // host: process.env.DB_HOST,
      // port: 3306,
      // username: process.env.DB_USER,
      // database: process.env.DB_NAME,
      // password: process.env.DB_PASS,
      entities: [LeadsEntity, EmployeEntity],
      synchronize: true,
      maxQueryExecutionTime: 20,
    }),
    TypeOrmModule.forFeature([LeadsEntity, EmployeEntity]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    LeadsModule,
    QueueModule,
    EmployeeModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
