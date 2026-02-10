/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateClassDto {
  @ApiProperty({ example: 'batch uuid' })
  @IsNotEmpty()
  batch_id!: string;

  @ApiProperty({ example: 'staff uuid' })
  @IsNotEmpty()
  staff_id!: string;

  @ApiProperty({ example: 'javascript' })
  @IsNotEmpty()
  subject!: string;

  @ApiProperty({ example: '2026-02-06 16:58:45.130761' })
  @IsNotEmpty()
  start_date!: Date;

  @ApiProperty({ example: '2026-02-06 16:58:45.130761' })
  @IsNotEmpty()
  start_time!: Date;

  @ApiProperty({ example: '2026-02-06 16:58:45.130761' })
  @IsNotEmpty()
  end_time!: Date;

  @ApiProperty({ example: 'online' })
  @IsNotEmpty()
  mode!: string;
}
