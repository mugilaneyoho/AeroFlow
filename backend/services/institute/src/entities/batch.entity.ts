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
@Index(['batchName', 'courseId', 'branchId', 'uuid'])
@Index(['isDelete'])
export class BatchEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ type: 'uuid', nullable: true })
  instituteId!: string;
  @ManyToOne(() => InstituteEntity, (institute) => institute.batches)
  @JoinColumn({ name: 'institute_id' })
  institute!: InstituteEntity;

  @Column({ type: 'uuid', nullable: true })
  branchId!: string;
  @ManyToOne(() => BranchEntity, (branch) => branch.batches)
  @JoinColumn({ name: 'branch_id' })
  branch!: BranchEntity;

  @Column({ type: 'uuid', nullable: true })
  courseId!: string;
  @ManyToOne(() => CourseEntity, (course) => course.batches)
  @JoinColumn({ name: 'course_id' })
  course!: CourseEntity;

  @Column({ type: 'text', nullable: true })
  batchName!: string;

  @Column({ type: 'enum', enum: BatchMode, default: BatchMode.OFFLINE })
  batchMode!: BatchMode;

  @Column({ type: 'text', nullable: true })
  batchCode!: string;

  @Column({ default: 0 })
  seatsFilled!: number;

  @Column({ type: 'integer', nullable: true })
  totalSeats!: number;

  @Column({ type: 'date', nullable: true })
  startDate!: Date;

  @Column({ type: 'date', nullable: true })
  endDate!: Date;

  @Column({ type: 'integer', nullable: true })
  duration!: number;

  @Column({ type: 'text', nullable: true })
  durationType!: string;

  @Column({ type: 'text', nullable: true })
  classStartTime!: string;

  @Column({ type: 'text', nullable: true })
  classEndTime!: string;

  @Column({ type: 'boolean', default: false })
  isDelete!: boolean;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;

  @OneToMany(() => StudentProfileEntity, (student) => student.batch_id)
  students!: StudentProfileEntity[];
}
