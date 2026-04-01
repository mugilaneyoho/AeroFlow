import Client from "../../../api/index"

export const fetchAllFees = async()=>{
    try {
        const response = await Client.fees.getAll()
        console.log("data in service:", response)
        return response
    } catch (error) {
        console.log("data in service error:", error)
    }
}