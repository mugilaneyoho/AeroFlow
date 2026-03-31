import {fetchAllFees} from "../service"
import {getAllFees} from "../reducer/feesSlice"

export const getFeesThunk=()=>async(dispatch:any)=>{
    try{
        const data = await fetchAllFees()
        dispatch(getAllFees(data))
    }catch(error){
        console.log("data in thunk error:", error)
    }
}