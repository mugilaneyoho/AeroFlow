import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
} from 'typeorm';

@Entity('onlineclasses')
export class OnlineClassesEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ type: 'uuid' })
  batch_id!: string;

  @Column({ type: 'uuid' })
  staff_id!: string;

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

  @Column({ type: 'text', default: 'online' })
  class_mode!: string;

  @Column({ type: 'boolean', default: false })
  is_delete!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
