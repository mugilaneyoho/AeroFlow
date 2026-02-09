import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private attendaceService: AttendanceService) {}

  @Post('create')
  create(@Body() data: CreateAttendanceDto) {
    return this.attendaceService.create(data);
  }

  @Get(':classId')
  find(@Param('classId') classId: string) {
    return this.attendaceService.findAll(classId);
  }
}
