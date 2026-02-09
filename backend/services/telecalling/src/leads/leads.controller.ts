import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { LeadsService } from './leads.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { LeadsUpdateDto } from './dto/leads-update.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadcsv(@UploadedFile() file: Express.Multer.File) {
    return this.leadsService.uploadLeads(file);
  }

  @Post('assigned')
  assigned(@Body('userid') userid: string[]) {
    return this.leadsService.assignLeads(userid);
  }

  @Put('update/:uuid')
  update(@Body() data: LeadsUpdateDto, @Param('uuid') uuid: string) {
    return this.leadsService.update(data, uuid);
  }

  @Get('all')
  findAll(@Query() query: { page: string; limit: string }) {
    return this.leadsService.findAll(query);
  }

  @Get('byemployee/:uuid')
  getbyemployee(@Param('uuid') uuid: string) {
    return this.leadsService.findByEmployee(uuid);
  }
}
