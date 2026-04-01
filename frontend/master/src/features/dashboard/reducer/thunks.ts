import { fetchActivityLog } from "../service";
import {getAllActivity} from "../reducer/dashboardSlice"

export const getActivityLogThunk=()=>async(dispatch:any)=>{
    try{
        const data = await fetchActivityLog()
        console.log("data in thunk:", data)
        dispatch(getAllActivity(data))
    }catch(error){
        console.log("data in thunk error:", error)
    }
}