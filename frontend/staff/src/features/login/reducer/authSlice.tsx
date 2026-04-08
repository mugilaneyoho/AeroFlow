// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { ClearLocalStorage, GetLocalStorage, StoreLocalStorage } from "../../../utils/helpers";


// const token = GetLocalStorage("AuthToken");
// const user= GetLocalStorage("user") ? JSON.parse(GetLocalStorage("user") as string) : null;

// interface AuthState {
//   isAuthenticated: boolean;
//   user: any | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   isAuthenticated: !!token,
//   user,
//   token: token || null,
//   loading: false,
//   error: null,
// };


// const authSlice = createSlice({
//   name: "auth",
//   initialState,

//   reducers: {
//     signin(state, action: PayloadAction<{ user: any; token: string }>) {
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.token = action.payload.token;

//       StoreLocalStorage("AuthToken", action.payload.token);
//       StoreLocalStorage("user", JSON.stringify(action.payload.user));
//     },

//     logout(state) {
//     state.isAuthenticated = false;
//     state.user = null;
//     state.token = null;
//     ClearLocalStorage();
//   },
//   setError(state,action:PayloadAction<string>){
//     state.error = action.payload;
//   },
// }
// });

// export const {
//   signin,
//     logout,
//     setError
// } = authSlice.actions;

// export default authSlice.reducer;
