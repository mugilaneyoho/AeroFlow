import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  ManyToOne,
} from 'typeorm';
import { StaffProfileEntity } from './staff.entity';

@Entity('offlineclasses')
export class OfflineClassesEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ type: 'uuid' })
  batch_id!: string;

  @Column({ type: 'uuid' })
  staff_id!: string;
  @ManyToOne(() => StaffProfileEntity, (staff) => staff.offline_class)
  staff!: StaffProfileEntity;

  @Column()
  subject!: string;

  @Column({ type: 'timestamptz' })
  start_date!: Date;

  @Column({ type: 'timestamptz' })
  start_time!: Date;

  @Column({ type: 'timestamptz' })
  end_time!: Date;

  @Column()
  batch_name!: string;

  @Column({ type: 'text', default: 'offline' })
  class_mode!: string;

  @Column({ nullable: true })
  total_student!: number;

  @Column({ type: 'integer', default: 0 })
  present_student!: number;

  @Column({ type: 'boolean', default: false })
  is_delete!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
