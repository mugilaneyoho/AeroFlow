import { createSlice } from "@reduxjs/toolkit";


const noteslice = createSlice({
    name: "notes",
    initialState:{
        notes: []
    },
    reducers:{
        getNotes:(state, action)=>{
            state.notes = action.payload
        },
        addNote:(state, action)=>{
            state.notes = [...state.notes, action.payload] as any
        },
        updateNote:(state, action)=>{
            const index = (state.notes as any[]).findIndex((n:any) => n.id === action.payload.id)
            if(index !== -1) (state.notes as any[])[index] = action.payload
        }
    }
})

export const {getNotes, addNote, updateNote} = noteslice.actions
export default noteslice.reducer