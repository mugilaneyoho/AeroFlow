import Client from "../../../api/index";

export const createAttendance = async (data: any) => {
  const response = await Client.attendance.createAttendance(data);
  return response;
};

export const getAttendanceByAll = async () => {
  const response = await Client.attendance.getPendingAttendance();
  return response;
};