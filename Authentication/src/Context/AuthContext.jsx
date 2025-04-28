import { createContext, useState } from "react";

export const AuthContext = createContext()



export function AuthContextProvider({children}){
    const[token,setToken]=useState(null)

    const handleLogin = (value) =>
    {
        setToken(value)
    }
    return <AuthContext.Provider value={{token,handleLogin}}>
            {children}
    </AuthContext.Provider>
}