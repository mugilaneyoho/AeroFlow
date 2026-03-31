import Client from "../../../api/index"

export const fetchAllFees = async()=>{
    try {
        const response = await Client.fees.getAll()
        return response.data
    } catch (error) {
        console.log("data in service error:", error)
    }
}