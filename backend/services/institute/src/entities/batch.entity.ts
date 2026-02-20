import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  JoinColumn,
  ManyToOne,
  Index,
  OneToMany,
} from 'typeorm';
import { InstituteEntity } from './institute.entity';
import { BranchEntity } from './branch.entity';
import { CourseEntity } from './course.entity';
import { StudentProfileEntity } from './student.entity';

export enum BatchMode {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

@Entity('batch')
@Index(['batch_name', 'course_id', 'branch_id', 'uuid'])
@Index(['is_delete'])
export class BatchEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column('uuid')
  institute_id!: string;
  @ManyToOne(() => InstituteEntity, (institute) => institute.batches)
  @JoinColumn({ name: 'institute_id' })
  institute!: InstituteEntity;

  @Column('uuid')
  branch_id!: string;
  @ManyToOne(() => BranchEntity, (branch) => branch.batches)
  @JoinColumn({ name: 'branch_id' })
  branch!: BranchEntity;

  @Column('uuid')
  course_id!: string;
  @ManyToOne(() => CourseEntity, (course) => course.batches)
  @JoinColumn({ name: 'course_id' })
  course!: CourseEntity;

  @Column()
  batch_name!: string;

  @Column({ type: 'enum', enum: BatchMode, default: BatchMode.OFFLINE })
  batch_mode!: BatchMode;

  @Column()
  batch_code!: string;

  @Column({ default: 0 })
  seats_filled!: number;

  @Column()
  total_seats!: number;

  @Column({ type: 'date' })
  start_date!: Date;

  @Column({ type: 'date' })
  end_date!: Date;

  @Column()
  duration!: number;

  @Column()
  duration_type!: string;

  @Column()
  class_start_time!: string;

  @Column()
  class_end_time!: string;

  @Column({ type: 'boolean', default: false })
  is_delete!: boolean;

  @Column({ type: 'boolean', default: true })
  is_active!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;

  @OneToMany(() => StudentProfileEntity, (student) => student.batch_id)
  students!: StudentProfileEntity[];
}
