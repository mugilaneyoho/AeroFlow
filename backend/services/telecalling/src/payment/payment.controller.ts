import {
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import * as microservices from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';

interface PaymentGrpc {
  GetAllPayment(data:any): Observable<any>;
}

@Controller('payment')
export class PaymentController implements OnModuleInit {
  private PaymentService: PaymentGrpc;

  constructor(
    @Inject('payment')
    private client: microservices.ClientGrpc,
  ) {}

  onModuleInit() {
    this.PaymentService = this.client.getService<PaymentGrpc>('PaymentService');
  }

  @Get('all')
  async findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const grpc_res = await lastValueFrom(this.PaymentService.GetAllPayment({}));

    if (!grpc_res.success) {
      console.error('grpc telecaller auth create error!');
      return new InternalServerErrorException('internal server error');
    }

    return {
      success: true,
      data: grpc_res?.data,
    };
  }

  @Post('create')
  create(){}
}
