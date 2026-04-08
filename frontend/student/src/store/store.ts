import { configureStore } from "@reduxjs/toolkit";
import ClassStore from "../feature/classes/redux/slice"
import DashboardSlice from "../feature/dashboard/redux/slice"
import studentSlice from "../features/reducers/studentslice"
import attendanceSlice from "../feature/attendance/redux/slice"
import notesReducer from "../feature/notes/reducer/notesSlice"

const store = configureStore({
    reducer:{
        classes: ClassStore,
        dashboard: DashboardSlice,
        studentSlice: studentSlice,
        attendace:attendanceSlice,
        notes: notesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
