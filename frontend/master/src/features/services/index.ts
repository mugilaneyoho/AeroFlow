import Client from "../../api/index"

export const fetchAll = async () => {
    const response = await Client.usersfaculty.GetAll()
    return response.data
}

export const createUser = async(data:any)=>{
    const response = await Client.usersfaculty.Post(data)
    console.log("createuser response :", response)
    return response
}