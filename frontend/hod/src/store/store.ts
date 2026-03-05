import { configureStore } from '@reduxjs/toolkit';
import staffReducer from '../features/staff/reduce/staffSlice';
import classesReducer from '../features/classess/reduce/classesSlice';
import courseReducer from '../features/coursespage/reducer/courseSlice';
import batchReducer from '../features/batchpage/reducer/batchSlice';
import dashboardReducer from '../features/dashboards/reducers/dashboardSlice';
import studentReducer from '../features/studentpage/reducer/studentSlice';
import loginReaducer from '../features/login/reducer/loginSlice';
const store = configureStore({
	reducer: {
		staff: staffReducer,
        classes: classesReducer, 
		course: courseReducer,
		batch: batchReducer,
		dashboard:dashboardReducer,
		student:studentReducer,
		login: loginReaducer 
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
