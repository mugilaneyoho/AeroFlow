import { Module } from '@nestjs/common';
import { ActivelogController } from './activelog.controller';
import { ActivelogService } from './activelog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLogEntity } from '../entity/activitylog';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActivityLogEntity]), 
  ],
  controllers: [ActivelogController],
  providers: [ActivelogService]
})
export class ActivelogModule {}
