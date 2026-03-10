import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
  JoinColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { InstituteEntity } from './institute.entity';
import { BranchEntity } from './branch.entity';
import { BatchEntity } from './batch.entity';
import { StudentProfileEntity } from './student.entity';

@Entity('course')
@Index(['uuid', 'branch_id', 'course_name'])
@Index(['is_delete'])
export class CourseEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column('uuid')
  institute_id!: string;
  @ManyToOne(() => InstituteEntity, (institute) => institute.courses)
  institute!: InstituteEntity;

  @Column('uuid')
  branch_id!: string;
  @ManyToOne(() => BranchEntity, (branch) => branch.uuid)
  branch!: BranchEntity;

  @Column()
  course_name!: string;

  @Column()
  description!: string;

  @Column()
  thumbnail!: string;

  @Column({ nullable: true })
  total_batches!: number;

  @Column()
  price!: number;

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

  @OneToMany(() => BatchEntity, (batch) => batch.courseId)
  batches!: BatchEntity[];

  @OneToMany(() => StudentProfileEntity, (student) => student.course_id)
  students!: StudentProfileEntity[];
}
