import { createSlice } from "@reduxjs/toolkit";

interface Fees{
    studentID: string
    uuid: string
    name: string
    course: string
    totalFee: number
    paidAmount: number
    pendingAmount: number
    status: string
    lastPayment: string
    actions?: string
    
}

interface FeesState{
    data: Fees[]
    selectedFees: Fees | null
}

const initialState: FeesState ={
    data: [],
    selectedFees: null
}
const FeesSlice = createSlice({
    name: "fees",
    initialState,
    reducers:{
        getAllFees:(state, action)=>{
            state.data = action.payload
        }
    }
})

export const {getAllFees} = FeesSlice.actions
export default FeesSlice.reducer