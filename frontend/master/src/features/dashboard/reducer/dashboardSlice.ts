import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ActivityLog{
    type: string;
    uuid: string
    description:string
    status: "SUCCESS" | "FAILED" | "PENDING"
    performedBy: string
    relatedEntity: string
    createdAt: string
}

interface DashboardState{
    activityLog: ActivityLog[]
}

const initialState: DashboardState={
    activityLog: []
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers:{
        getAllActivity:(state, action:PayloadAction<ActivityLog[]>)=>{
            state.activityLog=action.payload
        }
    }
})

export const {getAllActivity} = dashboardSlice.actions
export default dashboardSlice.reducer