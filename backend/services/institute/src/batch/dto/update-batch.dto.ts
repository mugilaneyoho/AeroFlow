/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class UpdateBatchDto {
  @ApiProperty({ example: 'institute uuid (use this default "default")' })
  @IsUUID()
  @IsNotEmpty()
  institute_id!: string;

  @ApiProperty({ example: 'branch uuid (use this default "default")' })
  @IsUUID()
  @IsNotEmpty()
  branch_id!: string;

  @ApiProperty({ example: 'course uuid' })
  @IsUUID()
  @IsNotEmpty()
  course_id!: string;

  @ApiProperty({ example: 'summer batch' })
  @IsString()
  @IsNotEmpty()
  batch_name!: string;

  @ApiProperty({ example: 40 })
  @IsNumber()
  @IsNotEmpty()
  total_seats!: number;

  @ApiProperty({ example: '2026-02-06 16:58:45.130761' })
  @IsDateString()
  @IsNotEmpty()
  start_date!: Date;

  @ApiProperty({ example: '2026-02-06 16:58:45.130761' })
  @IsDateString()
  @IsNotEmpty()
  end_date!: Date;

  @ApiProperty({ example: 3 })
  @IsNumber()
  @IsNotEmpty()
  duration!: number;

  @ApiProperty({ example: 'month' })
  @IsString()
  @IsNotEmpty()
  duration_type!: string;

  @ApiProperty({ example: '2026-02-06 16:58:45.130761' })
  @IsDateString()
  @IsNotEmpty()
  class_start_time!: string;

  @ApiProperty({ example: '2026-02-06 16:58:45.130761' })
  @IsDateString()
  @IsNotEmpty()
  class_end_time!: string;
}
