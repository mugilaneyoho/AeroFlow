import {createUser, fetchAll} from "../services/index"
import {addUser, getAllUser} from "../reducer/userslice"

export const getUserThunk = () => async(dispatch:any)=>{
    try{
        const data = await fetchAll()
        console.log("api data: ", data)
        dispatch(getAllUser(data))
        return data
    }catch(error){
        console.log("get error in thunks :", error)
    }
}

export const createUserThunk = (data:any)=> async(dispatch:any)=>{
    try{
        const res = await createUser(data)
        dispatch(addUser(res))
    }catch(error){
        console.log("create error in thunks :", error)
  }

}