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
import { CourseEntity } from './course.entity';

@Entity('branch')
@Index(['uuid', 'branch_name', 'email'])
export class BranchEntity {
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

  @Column()
  branch_name!: string;

  @Column()
  phone_number!: string;

  @Column()
  email!: string;

  @Column()
  address!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;

  @OneToMany(() => CourseEntity, (course) => course.branch_id)
  courses!: CourseEntity[];
}
