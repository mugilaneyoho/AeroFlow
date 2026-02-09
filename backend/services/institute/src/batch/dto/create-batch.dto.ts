export class CreateBatchDto {
  institute_id: string;
  branch_id: string;
  course_id: string;
  batch_name: string;
  total_seats: number;
  start_date: Date;
  end_date: Date;
  duration: number;
  duration_type: string;
  class_start_time: string;
  class_end_time: string;
}
