import { useAdminLoginMutation, useTelecallerLoginMutation } from "../../services/api"

export const LoginThunks =(isadmin,obj)=>{
    if (isadmin) {
        const [AdminLogin, {data,isLoading,isSuccess}] = useAdminLoginMutation()
    }else{
        const [teleLogin,{data,isLoading,isSuccess}] = useTelecallerLoginMutation()
    }
}