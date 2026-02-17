/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TelecallerAppDispatch } from "../../store/telecallerStore";
import { PickCallerNumber, StartCallingSlice } from "./slice";

export const StartCallingThunks=()=>async(dispatch:TelecallerAppDispatch)=>{
    try {
        dispatch(StartCallingSlice())
    } catch (error) {
        console.error(error)
    }
}

export const StoreCallingThunks=(data:any[])=>async(dispatch:TelecallerAppDispatch)=>{
    try {
        dispatch(PickCallerNumber(data))
    } catch (error) {
        console.error(error)
    }
}

