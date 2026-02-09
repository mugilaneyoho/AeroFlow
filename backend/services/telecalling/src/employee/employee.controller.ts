import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('all')
  findAll(@Query() query: { page: string; limit: string }) {
    return this.employeeService.findAll(query);
  }

  @Post('create')
  create(@Body() data: CreateEmployeeDto) {
    return this.employeeService.create(data);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.employeeService.findOne(uuid);
  }

  @Put(':uuid')
  update(@Param('uuid') uuid: string, @Body() data: UpdateEmployeeDto) {
    return this.employeeService.update(uuid, data);
  }

  @Delete(':uuid')
  softDelete(@Param('uuid') uuid: string) {
    return this.employeeService.softDelete(uuid);
  }
}
