
import client from "../../../api/index"

export const staffloginService = async (data:{email:string,password:string})=>{
    const response = await client.staff.login(data)
    console.log("login response:", response)
    return response
}