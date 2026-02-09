import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import type { StudentBody } from '../types';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentSerivce: StudentsService) {}

  @Post('login')
  login(@Body() body: StudentBody) {
    return this.studentSerivce.login(body);
  }
  // @Post('create')
  // create(@Body() body: StudentBody) {
  //   return this.studentSerivce.create(body);
  // }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.studentSerivce.findOne(id);
  }

  // @Post('verify')
  // @Post('forget')
  // @Put('reset-pass')
}
