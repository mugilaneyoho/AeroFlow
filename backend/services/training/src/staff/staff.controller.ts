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
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Staff')
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post('create')
  @ApiOperation({ summary: 'create new staff' })
  create(@Body() data: CreateStaffDto) {
    return this.staffService.create(data);
  }

  @Get('all')
  @ApiOperation({ summary: 'get all staff list' })
  findAll(@Query() query: { page: string; limit: string }) {
    return this.staffService.findAll(query);
  }

  // @Put('')

  @Get(':uuid')
  @ApiOperation({ summary: 'get single staff details' })
  @ApiParam({ name: 'uuid', type: String })
  findOne(@Param('uuid') uuid: string) {
    return this.staffService.findOne(uuid);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'soft delete in staff' })
  @ApiParam({ name: 'uuid', type: String })
  deleteOne(@Param('uuid') uuid: string) {
    return this.staffService.deleteOne(uuid);
  }
}
