
export interface Batch {
  id: string;
  uuid: string;
  batchName: string;
  batchMode: string;
  batchCode: string;
  seatsFilled: number;
  duration: number;
  durationType: string;
}

export interface StaffDashboard {
  staffcount: number;
  onlineClass: any[];
  offlineClass: any[];
  onlineClassCount: number;
  offlineClassCount: number;
  TotalCourse: number;
  ActiveBatch: number;
  TotalStudent: number;
  BatchList: Batch[];
}