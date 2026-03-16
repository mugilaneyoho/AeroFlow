import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private http;
    constructor(http: HttpService);
    forwardRequest(url: string, method: string, body?: any, user?: any): Promise<import("axios").AxiosResponse<any, any, {}>>;
    getHello(): string;
}
