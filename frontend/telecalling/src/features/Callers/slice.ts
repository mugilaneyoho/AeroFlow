import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pickNumber: {},
    AllNumber:[],
}

const CallerSlice = createSlice({
    name:"callerslice",
    initialState,
    reducers:{
        PickCallerNumber:(state,action)=>{
            state.pickNumber = action.payload;
        },
        StoreAllNumber:(state,action)=>{
            state.AllNumber = action.payload;
            state.pickNumber = state?.AllNumber?.[0]
        },
        NextNumber:(state)=>{
            const uuid = state.pickNumber?.uuid

            const index = state.AllNumber.findIndex((item)=>item.uuid === uuid)

            state.pickNumber = state.AllNumber[index + 1]

            state.AllNumber.splice(index,1)
        },
        StartCallingSlice:(state)=>{
            state.pickNumber = state?.AllNumber?.[0]
        },
    }
})

export const {
    PickCallerNumber,
    StoreAllNumber,
    NextNumber,
    StartCallingSlice
} = CallerSlice.actions;

export default CallerSlice.reducer;