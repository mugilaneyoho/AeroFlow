import Client from "../../../api";

export const fetchAllBatch = async (page: number, limit: number) => {
  const response = await Client.batch.getAll(page, limit);
  return response;
};

export const fetchBatchByCourse = async (courseid: string) => {
  const response = await Client.batch.getAllByCourse(courseid);
  return response;
};

export const fetchSingleBatch = async (uuid: string) => {
  const response = await Client.batch.getBatchById(uuid);
  return response;
};

export const createBatch = async (data: any) => {
  const response = await Client.batch.createBatch(data);
  return response;
};

export const updateBatch = async (uuid: string, data: any) => {
  const response = await Client.batch.updateBatch(uuid, data);
  return response;
};

export const deleteBatch = async (uuid: string) => {
  const response = await Client.batch.deleteBatch(uuid);
  return response;
};
