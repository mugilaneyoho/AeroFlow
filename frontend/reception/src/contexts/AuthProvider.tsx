import React, { useState, type ReactNode } from "react";
import { GetLocalStorage, RemoveLocalStorage, StoreLocalStorage } from "../utils/LocalStorage";
import { AuthContext } from "./AuthContext";

export const AuthProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [isAuthenticated, setisAuthenticated] = useState(()=>{
        const token = GetLocalStorage('t_r_tk')
        return !!token
    });

    const login = (token:string)=>{
        StoreLocalStorage("t_r_tk",token)
        setisAuthenticated(true)
    };

    const logout=()=>{
        RemoveLocalStorage('t_r_tk')
        setisAuthenticated(false)
    }

    const value = {
        isAuthenticated,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}