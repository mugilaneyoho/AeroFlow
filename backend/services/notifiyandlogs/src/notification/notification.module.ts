import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationEntity } from '../entity/notify';
import { NotificationGateway } from './socket/notificationsocket';

@Module({
  imports: [
    TypeOrmModule.forFeature([NotificationEntity]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationGateway]
})
export class NotificationModule {}
