import Client from "../../../api/index"

export const fetchNotes = async()=>{
    const response = await Client.notes.getNotes()
    return response
}

export const createNote = async(data:any)=>{
    const response = await Client.notes.createNote(data)
    return response
}

export const updateNote = async(id:number, data:any)=>{
    const response = await Client.notes.updateNote(id, data)
    return response
}