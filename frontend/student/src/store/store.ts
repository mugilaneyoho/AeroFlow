import {configureStore} from "@reduxjs/toolkit"
import studentSlice from "../features/reducers/studentslice"

export const store = configureStore({
    reducer:{
        studentSlice: studentSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch