import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadsEntity } from 'src/entities/leads.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LeadsEntity]),
    ClientsModule.register([
      {
        name: 'payment',
        transport: Transport.GRPC,
        options: {
          package: 'payment',
          protoPath: join(__dirname, '../proto/payment.proto'),
          url: '0.0.0.0:3011',
        },
      },
    ]),
  ],
  controllers: [PaymentController],
})
export class PaymentModule {}
