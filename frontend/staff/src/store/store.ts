import { configureStore } from '@reduxjs/toolkit';

import classesReducer from '../features/classes/reducer/classesSlice';
import attendanceReducer from '../features/attendance/reducer/attenSlice';
import loginReducer from '../features/login/reducer/authSlice';
import dashboardReducer from '../features/dashboard/reducer/dashboadSlice';
import notification from '../features/notification/reducer/notislice'
import note from "../features/syllabus/reducers/noteslice"
const store = configureStore({
	reducer: {
        classes: classesReducer, 
		attendance: attendanceReducer,
        login:loginReducer,
		dashboard:dashboardReducer,
		notification:notification,
		note:note
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
