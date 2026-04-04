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
    lastPayment?: string
    actions?: string
    
}

interface Stats {
    todayCollection: number
    totalCollected: number
    totalPending: number
    overdueStudents: number
}

interface FeesState{
    payments: Fees[]
    stats: Stats | null
    selectedFees: Fees | null
}

const initialState: FeesState ={
    payments: [],
    stats: null,
    selectedFees: null
}
const FeesSlice = createSlice({
    name: "fees",
    initialState,
    reducers:{
        getAllFees:(state, action)=>{
            state.payments = action.payload?.data
            state.stats = action.payload?.stats
        }
    }
})

export const {getAllFees} = FeesSlice.actions
export default FeesSlice.reducer