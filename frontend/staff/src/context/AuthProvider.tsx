import React, { useState, type ReactNode } from "react";
import { GetLocalStorage, RemoveLocalStorage, SetLocalStorage} from "../utils/SecureStorage";
import { AuthContext } from "./AuthContext";

export const AuthProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [isAuthenticated, setisAuthenticated] = useState(()=>{
        const token = GetLocalStorage('AuthToken')
        return !!token
    });

    const login = (token:string)=>{
        SetLocalStorage("AuthToken",token)
        setisAuthenticated(true)
    };

    const logout=()=>{
        RemoveLocalStorage('AuthToken')
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