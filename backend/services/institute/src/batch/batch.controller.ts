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
import { BatchService } from './batch.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('batch')
export class BatchController {
  constructor(private readonly batchService: BatchService) {}

  @Post('create')
  create(@Body() body: CreateBatchDto) {
    return this.batchService.create(body);
  }

  @Get('all')
  findAll(@Query() query: { page: string; limit: string }) {
    return this.batchService.findAll(query);
  }

  @Get('all/:courseid')
  findAllByCourse(
    @Param('courseid') courseid: string,
    @Query() query: { page: string; limit: string },
  ) {
    return this.batchService.findAllBycourse(courseid, query);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.batchService.findOne(uuid);
  }

  @Put(':uuid')
  updateOne(@Param('uuid') uuid: string, @Body() data: UpdateBatchDto) {
    return this.batchService.updateOne(uuid, data);
  }

  @Delete(':uuid')
  delete(@Param('uuid') uuid: string) {
    return this.batchService.softDelete(uuid);
  }

  @GrpcMethod('BatchService', 'GetById')
  findId(data: { batchid: string }) {
    return this.batchService.findOne(data.batchid);
  }

  @GrpcMethod('BatchService', 'GetAllBatch')
  find(data: { couseid: string }) {
    return this.batchService.findAllBycourseNew(data.couseid);
  }
}
