import Client from "../../../api/index";

export const staffloginService = async (data: {email: string;password: string;}) => {
  try {
    const response = await Client.staff.login(data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || {message:error.message || 'Login failed'};
  }
};



