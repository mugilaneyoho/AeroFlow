import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "../features/reducer/userslice"
import StudentReducer from "../features/student/reducer/studentSlice"

export const store = configureStore({
    reducer:{
        UserSlice: UserSlice,
        student: StudentReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch