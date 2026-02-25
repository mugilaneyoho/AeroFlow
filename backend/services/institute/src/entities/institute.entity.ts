import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToMany,
} from 'typeorm';
import { CourseEntity } from './course.entity';
import { BatchEntity } from './batch.entity';
import { BranchEntity } from './branch.entity';

@Entity('institute')
export class InstituteEntity {
  @Column({ unique: true })
  @Generated('increment')
  id!: number;

  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column()
  institute_name!: string;

  @Column()
  phone_number!: string;

  @Column()
  email!: string;

  @Column()
  logo!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;

  @OneToMany(() => BranchEntity, (branch) => branch.institute_id)
  branches!: BranchEntity[];

  @OneToMany(() => CourseEntity, (course) => course.institute_id)
  courses!: CourseEntity[];

  @OneToMany(() => BatchEntity, (batch) => batch.instituteId)
  batches!: BatchEntity[];
}
