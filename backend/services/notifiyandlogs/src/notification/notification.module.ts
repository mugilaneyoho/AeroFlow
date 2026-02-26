import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationEntity } from '../entity/notify';
import { NotificationGateway } from './socket/notificationsocket';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([NotificationEntity]),

    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'notification-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationGateway]
})
export class NotificationModule {}
