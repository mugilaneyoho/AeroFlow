/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  async forwardRequest(url: string, method: string, body?: any, user?: any) {
    return firstValueFrom(
      this.http.request({
        url,
        method,
        data: body,
        headers: {
          user,
        },
      }),
    );
  }

  getHello(): string {
    return 'Hello World!';
  }
}
