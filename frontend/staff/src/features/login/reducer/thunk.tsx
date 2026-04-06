// import type { AppDispatch } from '../../../store/store';
// import { StoreLocalStorage } from '../../../utils/helpers';
// import {

//   staffloginService

// } from '../services/index';
// import {
// 	signin,
// } from './authSlice';


// export const staffloginThunk = (loginData: { email: string; password: string ; role: string}) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//         const token = await staffloginService(loginData);

//       console.log("Token Received:", token);
//       console.log("Login Data:", loginData);

//       // if (!token) {
//       //   throw new Error("Please enter correct email and password");
//       // }

//       const user = {
//         email: loginData.email,
//         role: loginData.role,
//         passwordd: loginData.password
//       };

//       dispatch(signin({ user, token }));

//       StoreLocalStorage("AuthToken", token);
     
//       return { user, token };

//     } catch (error: any) {
//       console.error("Login error:", error);
//       throw new Error(error?.message || "Login failed");
//     }
//   };
// };



