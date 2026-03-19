import { configureStore } from "@reduxjs/toolkit";
import  ClassStore  from "../feature/classes/redux/slice"

const store = configureStore({
    reducer:{
        classes: ClassStore
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;