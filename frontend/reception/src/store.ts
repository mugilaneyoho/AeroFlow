import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { visitorApi } from './services/visitorApi';
import { meetingApi } from './services/meetingApi';

export const store = configureStore({
  reducer: {
    [visitorApi.reducerPath]: visitorApi.reducer,
    [meetingApi.reducerPath]: meetingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(visitorApi.middleware).concat(meetingApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


