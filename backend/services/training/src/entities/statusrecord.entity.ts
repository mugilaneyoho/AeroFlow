import {
  Entity,
  Column,
  Generated,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { AttendanceEntity } from './attendance.entity';

export enum StatusRecordEnum {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
}

@Entity('statusrecord')
export class StatusRecordEntity {
  @Column({ unique: true })
  @Generated('increment')
  id: number;

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('uuid')
  attendanceId: string;

  @Column('uuid')
  studentId: string;

  @Column({ type: 'enum', enum: StatusRecordEnum, nullable: false })
  status: StatusRecordEnum;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => AttendanceEntity, (attendance) => attendance.records)
  attendance: AttendanceEntity;
}
