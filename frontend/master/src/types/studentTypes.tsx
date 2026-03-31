
export interface StudentType {
  id: number;
  uuid: string;
  course_id: string;
  batch_id: string;
  admittedBy: string;
  student_name: string;
  student_id: string;
  email: string;
  phone_number: string;
  alter_number?: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  qualification: string;
  admission_date: string;
  is_active: boolean;
  is_delete: boolean;
}