import { getAllNotification } from "./hodnotislice"
import { fetchAllNotification } from "../service"


export const getNotificationThunk=()=>async(dispatch:any)=>{
    try {
        const res = await fetchAllNotification()
        dispatch(getAllNotification(res ?? []))
    } catch (error) {
        console.log("data in thunk error:", error)
    }
}