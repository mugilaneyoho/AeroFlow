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

@Entity('course')
@Index(['uuid', 'branch_id', 'course_name'])
@Index(['is_delete'])
export class CourseEntity {
  @Column({ unique: true })
  @Generated('increment')
  id: number;

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'char', length: 36 })
  institute_id: string;
  @ManyToOne(() => InstituteEntity, { eager: false })
  @JoinColumn({ name: 'insitute_id' })
  institute: InstituteEntity;

  @Column({ type: 'char', length: 36 })
  branch_id: string;
  @ManyToOne(() => BranchEntity, (branch) => branch.courses)
  branch: BranchEntity;

  @Column()
  course_name: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  total_batches: number;

  @Column()
  price: number;

  @Column({ type: 'boolean', default: false })
  is_delete: boolean;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @OneToMany(() => BatchEntity, (batch) => batch.course_id)
  batches: BatchEntity[];
}
