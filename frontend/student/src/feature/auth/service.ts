import client from "../../api/index"

export const LoginService = async (data:{email:string,password:string})=>{
    const res = await client.student.login(data)
    console.log("login response:", res)
    return res
}