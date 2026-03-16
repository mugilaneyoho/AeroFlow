import Client from "../../../api";

export const fetchAllClasses = async (tab:string) => {
  const response = await Client.classes.getAll(tab);
  return response.data;
};

export const fetchSingleClass = async (uuid: string, mode: string) => {
  const response = await Client.classes.getClassById(uuid, mode);
  return response.data;
};

export const createClass = async (data: any) => {
  const response = await Client.classes.createClass(data);
  return response.data;
};

export const updateClass = async (uuid: string, mode: string, data: any) => {
  const response = await Client.classes.updateClass(uuid, mode, data);
  return response.data;
};

export const deleteClass = async (uuid: string, mode: string) => {
  const response = await Client.classes.deleteClass(uuid, mode);
  return response.data;
};
