import { Module } from '@nestjs/common';
import { ActivelogController } from './activelog.controller';
import { ActivelogService } from './activelog.service';

@Module({
  controllers: [ActivelogController],
  providers: [ActivelogService]
})
export class ActivelogModule {}
