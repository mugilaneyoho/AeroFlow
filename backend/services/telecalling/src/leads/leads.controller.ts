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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'csv file upload url for leads' })
  uploadcsv(@UploadedFile() file: Express.Multer.File) {
    return this.leadsService.uploadLeads(file);
  }

  @Post('assigned')
  @ApiOperation({ summary: 'leads assign by telecallers' })
  assigned(@Body('userid') userid: any[], @Body('count') count: number) {
    return this.leadsService.assignLeads(userid, count);
  }

  @Put('update/:uuid')
  @ApiOperation({ summary: 'leads status and details are updated' })
  update(@Body() data: LeadsUpdateDto, @Param('uuid') uuid: string) {
    return this.leadsService.update(data, uuid);
  }

  @Get('all')
  @ApiOperation({ summary: 'get all leads' })
  findAll(@Query() query: { page: string; limit: string }) {
    return this.leadsService.findAll(query);
  }

  @Get('byemployee/:uuid')
  @ApiOperation({ summary: 'get leads by employee uuid' })
  getbyemployee(@Param('uuid') uuid: string) {
    return this.leadsService.findByEmployee(uuid);
  }
}
