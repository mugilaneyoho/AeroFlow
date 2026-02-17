import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntiry } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/createpayment.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PaymentEntiry)
    private paymentRepo: Repository<PaymentEntiry>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findall() {
    const data = await this.paymentRepo.find();

    return {
      success: true,
      message: 'payment data fetched',
      data,
    };
  }

  async create(data: CreatePaymentDto) {
    const pay = this.paymentRepo.create(data);

    const fees = await this.paymentRepo.save(pay);

    return {
      data: fees,
    };
  }
}
