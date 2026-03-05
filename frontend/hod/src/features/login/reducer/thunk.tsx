import type { AppDispatch } from '../../../store/store';
import { StoreLocalStorage } from '../../../utils/helpers';
import {

  adminloginService,
	createUsersService,

} from '../services/index';
import {
	signin,
} from './loginSlice';


export const adminloginThunk = (loginData: { email: string; password: string ; role: string}) => {
  return async (dispatch: AppDispatch) => {
    try {
        const token = await adminloginService(loginData);

      console.log("Token Received:", token);

      if (!token) {
        throw new Error("Please enter correct email and password");
      }

      const user = {
        email: loginData.email,
        role: loginData.role,
      };

      dispatch(signin({ user, token }));

      StoreLocalStorage("AuthToken", token);
     
      return { user, token };

    } catch (error: any) {
      console.error("Login error:", error);
      throw new Error(error?.message || "Login failed");
    }
  };
};

export const createusersThunk = (data:any) => {
	return async () => {
		try {
			const response = await createUsersService(data);
			if (response) {
				return response?.data || response;
			}
		} catch (error:any) {
			return error;
		}
	};
};

