/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateEmployeeLeadsMutation } from "../../services/RTKQuery/CallerQueryApi";
import type { TelecallerAppDispatch, TelecallerRootState } from "../../store/telecallerStore";
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

export const updateStatusThunks=(updates:{uuid:string,name:string,notes:string,status:string})=>async(dispatch:TelecallerRootState)=>{
    try {
        // const [updateLeads,{data}] = useUpdateEmployeeLeadsMutation()

        // await updateLeads(updates)
    } catch (error) {
        console.error(error)
    }
}
