import {configureStore} from "@reduxjs/toolkit"
import { CallerQueryApi } from "../services/RTKQuery/CallerQueryApi"
import CallerSlice from "../features/Callers/slice"

const TelecallerStore = configureStore({
    reducer:{
        [CallerQueryApi.reducerPath]:CallerQueryApi.reducer,
        CallerSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CallerQueryApi.middleware)
})

export default TelecallerStore
export type TelecallerRootState = ReturnType<typeof TelecallerStore.getState>
export type TelecallerAppDispatch = typeof TelecallerStore.dispatch