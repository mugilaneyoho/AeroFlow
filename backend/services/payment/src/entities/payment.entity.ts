import {
  Entity,
  Column,
  Generated,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('payment')
export class PaymentEntiry {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column()
  amount!: number;

  @Column({ type: 'timestamptz' })
  payment_date!: Date;

  @Column()
  payment_method!: string;

  @Column()
  receipt_number!: string;

  @Column()
  transaction_id!: string;

  @Column('uuid')
  collected_by!: string;

  @Column('uuid')
  student_id!: string;

  @Column()
  student_name!: string;

  @Column()
  notes!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
