import { getAllNotification } from "./notislice"
import { fetchAllNotification } from "../service"


export const getNotificationThunk=()=>async(dispatch:any)=>{
    try {
        const res = await fetchAllNotification()
        dispatch(getAllNotification(res?.data ?? []))
    } catch (error) {
        console.log("data in thunk error:", error)
    }
}