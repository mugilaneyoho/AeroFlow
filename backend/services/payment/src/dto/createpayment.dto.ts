export class CreatePaymentDto {
  amount!: number;
  payment_date!: Date;
  payment_method!: string;
  receipt_number!: string;
  transaction_id!: string;
  collected_by!: string;
  student_id!: string;
  student_name!: string;
  notes!: string;
}
