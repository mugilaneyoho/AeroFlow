import React, { useState, type ReactNode } from "react";
import { GetLocalStorage, RemoveLocalStorage, StoreLocalStorage } from "../utils/LocalStorage";
import { AuthContext } from "./AuthContext";

export const AuthProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [isAuthenticated, setisAuthenticated] = useState(()=>{
        const token = GetLocalStorage('t_a_tk')
        return !!token
    });

    const [isAdmin, setisAdmin] = useState(()=>{
        const role = GetLocalStorage('t_as_r')
        return role !== 'telecaller' ? false : true
    });

    const login = (token:string, role:string)=>{
        StoreLocalStorage("t_a_tk",token)
        StoreLocalStorage("t_as_r",role)
        setisAuthenticated(true)
        setisAdmin(()=>{
            return role === 'admin' ? true : false
        })
    };

    const logout=()=>{
        RemoveLocalStorage('t_a_tk')
        RemoveLocalStorage('t_as_r')
        setisAuthenticated(false)
    }

    const value = {
        isAuthenticated,
        login,
        logout,
        isAdmin
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}