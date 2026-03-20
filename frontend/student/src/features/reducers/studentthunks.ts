import {feeService} from "../services/index"
import {getAllstudent} from "../reducers/studentslice"

export const getUserThunk = () => async(dispatch:any)=>{
    try{
        const data = await feeService()
        console.log("api data: ", data)
        dispatch(getAllstudent(data))
        return data
    }catch(error){
        console.log("get error in thunks :", error)
    }
}