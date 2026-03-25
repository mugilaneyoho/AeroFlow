import Client from "../../../api/index";

export const fetchAllAdmission = async () => {
    const response = await Client.student.get();
    return response.data.data; 
};

export const createAdmission = async (data: any) => {
    const response = await Client.student.create(data);
    return response.data.data;
};

export const deleteAdmission = async (uuid: string) => {
    const response = await Client.student.delete(uuid);
    return response.data;
}; 

export const fetchAdmissionById = async (uuid: string) => {
    const response = await Client.student.getById(uuid);
    return response.data.data;
}; 