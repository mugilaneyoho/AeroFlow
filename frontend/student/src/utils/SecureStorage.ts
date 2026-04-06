/* eslint-disable @typescript-eslint/no-explicit-any */
import secureLocalStorage from "react-secure-storage";

export const GetLocalStorage=(key:string)=>{
    return localStorage.getItem(key)
}

export const SetLocalStorage=(key:string,data:any)=>{
    localStorage.setItem(key,data)
}

export const RemoveLocalStorage=(key:string)=>{
    secureLocalStorage.removeItem(key)
}

export const ClearLocalStorage=()=>{
    secureLocalStorage.clear()
}
