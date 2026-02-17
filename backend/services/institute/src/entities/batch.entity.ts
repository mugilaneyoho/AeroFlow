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
} from 'typeorm';
import { InstituteEntity } from './institute.entity';
import { BranchEntity } from './branch.entity';
import { CourseEntity } from './course.entity';

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
  @ManyToOne(() => InstituteEntity, { eager: false })
  @JoinColumn({ name: 'institute_id' })
  institute!: InstituteEntity;

  @Column('uuid')
  branch_id!: string;
  @ManyToOne(() => BranchEntity, { eager: false })
  @JoinColumn({ name: 'branch_id' })
  branch!: BranchEntity;

  @Column('uuid')
  course_id!: string;
  @ManyToOne(() => CourseEntity, (course) => course.batches)
  course!: CourseEntity;

  @Column()
  batch_name!: string;

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

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;
}
