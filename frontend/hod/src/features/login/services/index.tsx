import Client from "../../../api/index";

export const adminloginService = async (data: {email: string;password: string;}) => {
  try {
    const response = await Client.admins.login(data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || {message:error.message || 'Login failed'};
  }
};

export const createUsersService = async (data: any) => {
  try {
    return await Client.admins.createAdmin(data);
  } catch (error: any) {
    throw error?.response?.data || error.message;
  }
};

