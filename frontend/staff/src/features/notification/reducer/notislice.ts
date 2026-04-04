import { createSlice } from "@reduxjs/toolkit";


const notislice = createSlice({
    name: "notification",
    initialState: {
        notification: []
    },
    reducers:{
        getAllNotification:(state, action)=>{
            state.notification = action.payload
        }

    
    }
})

export const {getAllNotification} = notislice.actions
export default notislice.reducer