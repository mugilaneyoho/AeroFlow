/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthGard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private readonly appService: AppService,
    private http: HttpService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();

    const token = request.headers['authorization'];

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const decode = await this.jwtService.verifyAsync(token);
      const { data } = await firstValueFrom(
        this.http.request({
          url: `http://localhost:3002/roles/${decode.role_id}`,
          method: 'GET',
        }),
      );

      request['user'] = JSON.stringify({ ...decode, role: data.role });

      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
