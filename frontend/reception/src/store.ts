import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { visitorApi } from './services/visitorApi';
import { meetingApi } from './services/meetingApi';
import { globalApi } from './services/globalApi';

export const store = configureStore({
  reducer: {
    [visitorApi.reducerPath]: visitorApi.reducer,
    [meetingApi.reducerPath]: meetingApi.reducer,
    [globalApi.reducerPath]:globalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(visitorApi.middleware).concat(meetingApi.middleware).concat(globalApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


