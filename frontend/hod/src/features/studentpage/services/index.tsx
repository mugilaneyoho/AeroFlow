import Client from "../../../api/index";


export const fetchAllStudent = async () => {
  const response = await Client.student.getAll();
  return response;
};

export const fetchSingleStudent = async (uuid: string) => {
  const response = await Client.student.getStudentById(uuid);
  return response;
};

export const createStudent = async (data: any) => {
  const response = await Client.student.createStudent(data);
  return response;
};

export const deleteStudent = async (uuid: string) => {
  const response = await Client.student.deleteStudent(uuid);
  return response;
};