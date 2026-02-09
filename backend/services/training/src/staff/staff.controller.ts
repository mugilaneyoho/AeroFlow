import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post('create')
  create(@Body() data: CreateStaffDto) {
    return this.staffService.create(data);
  }

  @Get('all')
  findAll(@Query() query: { page: string; limit: string }) {
    return this.staffService.findAll(query);
  }

  // @Put('')

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.staffService.findOne(uuid);
  }

  @Delete(':uuid')
  deleteOne(@Param('uuid') uuid: string) {
    return this.staffService.deleteOne(uuid);
  }
}
