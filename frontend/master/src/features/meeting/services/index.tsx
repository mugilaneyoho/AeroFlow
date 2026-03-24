import Client from "../../../api";

export const fetchAllMeetings = async () => {
    const response = await Client.meeting.getAll();
    console.log("API RESPONSE:", response);
    return response.data;
};

export const createMeetingApi = async (data: any) => {
    const response = await Client.meeting.create(data);
    return response.data;
};

export const updateMeetingApi = async (id: number, data: any) => {
    const response = await Client.meeting.update(id, data);
    return response.data;
};