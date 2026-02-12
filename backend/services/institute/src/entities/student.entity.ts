import {
  Entity,
  Column,
  Generated,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

Entity('Studentprofile');
export class StudentProfileEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column('uuid')
  course_id!: string;

  @Column('uuid')
  batch_id!: string;

  @Column()
  student_name!: string;

  @Column()
  student_id!: string;

  @Column()
  email!: string;

  @Column()
  phone_number!: string;

  @Column()
  qualification!: string;

  @Column({ type: 'timestamp' })
  admission_date!: string;

  @Column({ type: 'boolean', default: true })
  is_active!: boolean;

  @Column({ type: 'boolean', default: false })
  is_delete!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
