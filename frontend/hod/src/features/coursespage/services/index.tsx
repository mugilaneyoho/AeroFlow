import Client from "../../../api/index";



export const fetchAllCourse = async () => {
  const response = await Client.course.getAll();
  return response;
};


export const fetchSingleCourse = async (uuid: string) => {
  const response = await Client.course.getCourseById(uuid);
  return response;
};



export const createCourse = async (data: any) => {
  const response = await Client.course.createCourse(data);
  return response;
};



export const deleteCourse = async (uuid: string) => {
  const response = await Client.course.deleteCourse(uuid);
  return response;
};



export const updateCourse = async (uuid: string, data: any) => {
  const response = await Client.course.updateCourse(uuid, data);
  return response;
};
