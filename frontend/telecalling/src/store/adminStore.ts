import {configureStore} from "@reduxjs/toolkit"
import { TeleCallerApi } from "../services/RTKQuery/TeleCaller"
import { CommonApi } from "../services/api"

const AdminStore = configureStore({
    reducer:{
        [TeleCallerApi.reducerPath]:TeleCallerApi.reducer,
        [CommonApi.reducerPath]:CommonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(TeleCallerApi.middleware)
    .concat(CommonApi.middleware),
})

export default AdminStore
export type AdminRootState = ReturnType<typeof AdminStore.getState>
export type AdminAppDispatch = typeof AdminStore.dispatch