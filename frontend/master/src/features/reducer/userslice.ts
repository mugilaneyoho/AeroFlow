import {createSlice} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user",
    initialState:{
        data:[]
    },
    reducers: {
        getAllUser: (state:any, action:any)=>{
            state.data = action.payload
        },
        addUser:(state:any, action:any)=>{
            state.data.push(action.payload)
    }
    },
})

export const {getAllUser, addUser} = UserSlice.actions
export default UserSlice.reducer