import { Module } from '@nestjs/common';
import { ActivelogController } from './activelog.controller';
import { ActivelogService } from './activelog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLogEntity } from '../entity/activitylog';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActivityLogEntity]),
        ClientsModule.register([
          {
            name: 'KAFKA_CLIENT',
            transport: Transport.KAFKA,
            options: {
              client: { 
                clientId: 'notifyandlog', 
                brokers: ['localhost:9092'] 
              },
              consumer: { 
                groupId: 'notifyandlog-consumer' 
              },
            },
          },
        ]), 
  ],
  controllers: [ActivelogController],
  providers: [ActivelogService],
})
export class ActivelogModule {}
