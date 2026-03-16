import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "../features/reducer/userslice"

export const store = configureStore({
    reducer:{
        UserSlice: UserSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch