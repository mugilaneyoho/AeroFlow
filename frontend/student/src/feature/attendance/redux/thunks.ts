import { toast } from "react-toastify";
import type { AppDispatch } from "../../../store/store";
import { GetAttendanceService } from "../service";
import { getAttendance } from "./slice";

export const GetAttendaceThunks =(date:string)=>async(dispatch:AppDispatch)=>{
    try {
        const res = await GetAttendanceService(date);

        if(!res?.data){
            toast.warn("try again..")
        }

        dispatch(getAttendance(res.data))
    } catch (error) {
        console.log(error)
    }
}