import {
  Entity,
  Column,
  Generated,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StudentFeesEntity } from './studentfees.entity';

export enum PaymentStatus {
  PENDING = 'PENDING',
  AUTHORIZED = 'AUTHORIZED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  REFUNDED = 'REFUNDED',
}

@Entity('payment')
export class PaymentEntiry {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column('uuid')
  studentFeesId!: string;
  @ManyToOne(() => StudentFeesEntity, (fees) => fees.payments)
  @JoinColumn({ name: 'studentFeesId' })
  studentFees!: StudentFeesEntity;

  @Column()
  amount!: number;

  @Column({ type: 'timestamptz' })
  paymentDate!: Date;

  @Column()
  paymentMethod!: string;

  @Column()
  receiptNumber!: string;

  @Column()
  transactionId!: string;

  @Column('uuid')
  studentId!: string;

  @Column()
  studentName!: string;

  @Column()
  notes!: string;

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
  status!: PaymentStatus;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
