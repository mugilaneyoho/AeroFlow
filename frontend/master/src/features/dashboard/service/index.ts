import Client from "../../../api/index"

export const fetchActivityLog = async()=>{
    try{
        const response = await Client.dashboard.getActivity()
        return response
    }catch (error){
        console.log("data in service error:", error)
    }
}