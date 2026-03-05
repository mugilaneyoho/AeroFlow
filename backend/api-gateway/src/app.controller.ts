/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { All, Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGard } from './auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  private serviceRoutes = [
    { path: '/institute', target: 'http://localhost:3004' },
    { path: '/telecalling', target: 'http://localhost:3006' },
    { path: '/training', target: 'http://localhost:3008' },
  ];

  @UseGuards(AuthGard)
  @All('*')
  async proxyAll(@Req() req: any, @Res() res: any) {
    console.log('Req CLECOB', req.query);
    const route = this.serviceRoutes.find((r) => req.path.startsWith(r.path));

    if (!route) {
      return res.status(404).json({ message: 'Route not found in gateway' });
    }

    const strippedPath = req.path.replace(route.path, '');

    const targetURL = route.target + strippedPath;
    console.log('TargetURL', targetURL);

    try {
      const result = await this.appService.forwardRequest(
        targetURL,
        req.method,
        req.body,
        req.user,
        req.query,
      );
      return res.json(result.data);
    } catch (error: any) {
      return res
        .status(error.response?.status || 500)
        .json(error.response?.data || error);
    }
  }
}
