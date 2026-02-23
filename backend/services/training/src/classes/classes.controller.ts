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
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classService: ClassesService) {}

  @Post('create')
  create(@Body() data: CreateClassDto) {
    return this.classService.create(data);
  }

  @Get('all')
  findAll(@Query() query: { page: string; limit: string; classtype: string }) {
    return this.classService.findAll(query);
  }

  @Get('staff/:staffid')
  findbystaff(
    @Param('staffid') uuid: string,
    @Query() query: { page: string; limit: string; classtype: string },
  ) {
    return this.classService.findAll(query, uuid);
  }
  @Put('update/:uuid/:mode')
  update(
    @Body() data: UpdateClassDto,
    @Param() param: { uuid: string; mode: string },
  ) {
    return this.classService.update(param.uuid, data, param.mode);
  }

  @Get(':uuid/:mode')
  findOne(@Param() param: { uuid: string; mode: string }) {
    return this.classService.findOne(param.uuid, param.mode);
  }

  @Delete(':uuid/:mode')
  deleteone(@Param() param: { uuid: string; mode: string }) {
    return this.classService.deleteOne(param.uuid, param.mode);
  }
}
