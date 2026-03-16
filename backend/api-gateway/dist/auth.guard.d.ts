import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
export declare class AuthGard implements CanActivate {
    private jwtService;
    private readonly appService;
    private http;
    constructor(jwtService: JwtService, appService: AppService, http: HttpService);
    canActivate(context: ExecutionContext): Promise<any>;
}
