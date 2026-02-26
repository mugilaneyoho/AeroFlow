// import { Controller } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';

// @Controller('activelog')
// export class ActivelogController {
//   @MessagePattern('activelog.created')
//   handelActivelogCreate(@Payload() message: any) {
//     console.log('recived:', message);
//     return 'message processed';
//   }
// }

import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { ActivelogService } from './activelog.service';
import {ActivityLogEntity} from '../entity/activitylog'

@Controller('activelog')
export class ActivelogController {
  
  constructor(private readonly activeLogService: ActivelogService) {}
  
  @Post()
  async create(@Body() body: Partial<ActivityLogEntity>) {
    return this.activeLogService.create(body);
  }

  @Get()
  async findAll() {
    return this.activeLogService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param(':uuid') uuid: string) {
    return this.activeLogService.findOne(uuid);
  }

  @Put(':uuid')
  async update(@Param('uuid') uuid: string, @Body() body: Partial<ActivityLogEntity>) {
    return this.activeLogService.update(uuid, body);
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    return this.activeLogService.remove(uuid);
  }

}
