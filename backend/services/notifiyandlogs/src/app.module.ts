import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivelogModule } from './activelog/activelog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLogEntity } from './entity/activitylog';
import { NotificationModule } from './notification/notification.module';
import { NotificationEntity } from './entity/notify';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://patron_727o_user:vNL871u0UdD5lEwe01ZqngnTCDgO7NtE@dpg-d6bvqg7tn9qs73c7qcqg-a.singapore-postgres.render.com/patron_727o',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [ActivityLogEntity, NotificationEntity],
      synchronize: true,
    }),

    ActivelogModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
