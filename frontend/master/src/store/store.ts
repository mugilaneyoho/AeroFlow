import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "../features/reducer/userslice"
import StudentReducer from "../features/student/reducer/studentSlice"
import meetingReducer from "../features/meeting/reducer/meetingSlice"

export const store = configureStore({
    reducer:{
        UserSlice: UserSlice,
        student: StudentReducer,
        meeting:meetingReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch