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
import { CourseEntity } from './course.entity';
import { BatchEntity } from './batch.entity';

@Entity('StudentProfile')
export class StudentProfileEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column('uuid')
  course_id!: string;
  @ManyToOne(() => CourseEntity, (course) => course.students)
  @JoinColumn({ name: 'course_id' })
  course!: CourseEntity;

  @Column('uuid')
  batch_id!: string;
  @ManyToOne(() => BatchEntity, (batch) => batch.students)
  @JoinColumn({ name: 'batch_id' })
  batches!: BatchEntity;

  @Column('uuid')
  admittedBy!: string;

  @Column()
  student_name!: string;

  @Column()
  student_id!: string;

  @Column()
  email!: string;

  @Column()
  phone_number!: string;

  @Column()
  alter_number!: string;

  @Column()
  gender!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  pincode!: string;

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
