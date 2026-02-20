import {
  Body,
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import * as microservices from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom, Observable } from 'rxjs';
import { LeadsEntity, LeadStatus } from 'src/entities/leads.entity';
import { Repository } from 'typeorm';

interface PaymentGrpc {
  GetAllPayment(data: any): Observable<any>;
  CreatePayment(data: any): Observable<any>;
}

@Controller('payment')
export class PaymentController implements OnModuleInit {
  private PaymentService: PaymentGrpc;

  constructor(
    @Inject('payment')
    private client: microservices.ClientGrpc,
    @InjectRepository(LeadsEntity)
    private leadRepo: Repository<LeadsEntity>,
  ) {}

  onModuleInit() {
    this.PaymentService = this.client.getService<PaymentGrpc>('PaymentService');
  }

  @Get('all')
  async findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const grpc_res = await lastValueFrom(this.PaymentService.GetAllPayment({}));

    console.log(grpc_res)

    if (!grpc_res.success) {
      console.error('grpc telecaller auth create error!');
      return new InternalServerErrorException('internal server error');
    }

    return {
      success: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: grpc_res?.data,
    };
  }

  @Post('create')
  async create(@Body() data: any) {
    const grpc_res = await lastValueFrom(
      this.PaymentService.CreatePayment(data),
    );

    console.log(grpc_res)


    await this.leadRepo.update(
      { uuid: data?.leadid },
      { status: LeadStatus.ADMITTED },
    );

    return {
      success: true,
      data: grpc_res?.data,
    };
  }
}
