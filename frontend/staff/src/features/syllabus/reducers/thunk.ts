import { getNotes, addNote, updateNote as updateNoteAction } from "./noteslice";
import { fetchNotes, createNote, updateNote } from "../service";

export const getNoteThunk=()=>async(dispatch:any)=>{
    try {
        const res = await fetchNotes()
        dispatch(getNotes(res ?? []))
        return res
    } catch (error) {
        console.log("getNoteThunk error:", error)
    }
}

export const updateNoteThunk=(id:number, data:any)=>async(dispatch:any)=>{
    try {
        const res = await updateNote(id, data)
        dispatch(updateNoteAction(res?.data ?? res))
        return res
    } catch (error) {
        console.log("updateNoteThunk error:", error)
    }
}

export const createNoteThunk=(data:any)=>async(dispatch:any)=>{
    try {
        const res = await createNote(data)
        dispatch(addNote(res))
        return res
    } catch (error) {
        console.log("createNoteThunk error:", error)
    }
}
