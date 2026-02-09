import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dashboard')
  dash() {
    return this.appService.dashboad();
  }

  @Get('emp-status')
  getstatus() {
    return this.appService.getstatus();
  }
}
