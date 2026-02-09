import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadsEntity } from 'src/entities/leads.entity';
import { QueueModule } from 'src/queue/queue.module';
import { LeadProcessor } from './leads.processor';

@Module({
  imports: [TypeOrmModule.forFeature([LeadsEntity]), QueueModule],
  controllers: [LeadsController],
  providers: [LeadsService, LeadProcessor],
})
export class LeadsModule {}
