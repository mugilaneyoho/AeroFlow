import Client from "../../../api/index";

export const fetchAllStudents = async () => {
    const response = await Client.student.get();
    return response.data.data; 
};

export const createStudent = async (data: any) => {
    const response = await Client.student.create(data);
    return response.data.data;
};

export const deleteStudent = async (uuid: string) => {
    const response = await Client.student.delete(uuid);
    return response.data;
}; 

export const fetchStudentById = async (uuid: string) => {
    const response = await Client.student.getById(uuid);
    return response.data.data;
};