import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    private serviceRoutes;
    proxyAll(req: any, res: any): Promise<any>;
}
