import { getAllNotification } from "./hodnotislice"
import { fetchAllNotification } from "../service"


export const getNotificationThunk=()=>async(dispatch:any)=>{
    try {
        const res = await fetchAllNotification()
        console.log("Notification:", res)
        dispatch(getAllNotification(res ?? []))
    } catch (error) {
        console.log("data in thunk error:", error)
    }
}