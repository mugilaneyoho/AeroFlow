import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "../features/reducer/userslice"
import StudentReducer from "../features/student/reducer/studentSlice"
import meetingReducer from "../features/meeting/reducer/meetingSlice"
import admissionReducer from "../features/admission/reducer/admissionSlice"
import fees from "../features/fees/reducer/feesSlice"
import dashboardactivity from "../features/dashboard/reducer/dashboardSlice"

export const store = configureStore({
    reducer:{
        UserSlice: UserSlice,
        student: StudentReducer,
        meeting:meetingReducer,
        admission:admissionReducer,
        fees: fees,
        dashboardactivity:dashboardactivity
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch