import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntiry, PaymentStatus } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/createpayment.dto';
import { StudentFeesEntity } from './entities/studentfees.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PaymentEntiry)
    private paymentRepo: Repository<PaymentEntiry>,
    @InjectRepository(StudentFeesEntity)
    private feesRepo: Repository<StudentFeesEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findall() {
    const [data,total] = await this.paymentRepo.findAndCount();

    return {
      success: true,
      message: 'payment data fetched',
      data,
    };
  }

  async createAdmission(data: CreatePaymentDto) {
    let fees!: PaymentEntiry;
    const student_fee = await this.feesRepo.findOne({
      where: { studentId: data.studentId },
    });

    const nowDate = new Date();

    const receiptNumber =
      'PAY' +
      nowDate.getMilliseconds() +
      nowDate.getSeconds() +
      nowDate.getHours() +
      'TSD' +
      nowDate.getFullYear() +
      nowDate.getMonth() +
      nowDate.getDate();

    if (student_fee) {
      const pay = this.paymentRepo.create({
        ...data,
        studentFeesId: student_fee.uuid,
        receiptNumber,
        status: PaymentStatus.SUCCEEDED,
      });

      fees = await this.paymentRepo.save(pay);

      await this.feesRepo.update(
        { uuid: student_fee.uuid },
        { lastPaidDate: nowDate },
      );
    } else {
      const studentfee = this.feesRepo.create({
        studentId: data.studentId,
        admissionFeesPay: true,
        admissionFeesAmount: data.amount,
        lastPaidDate: nowDate,
      });

      const feeList = await this.feesRepo.save(studentfee);

      const pay = this.paymentRepo.create({
        ...data,
        studentFeesId: feeList.uuid,
        receiptNumber,
        status: PaymentStatus.SUCCEEDED,
      });

      fees = await this.paymentRepo.save(pay);

      await this.feesRepo.update(
        { uuid: feeList.uuid },
        { admissionFeesId: fees.uuid },
      );
    }

    return {
      data: fees,
    };
  }
}
