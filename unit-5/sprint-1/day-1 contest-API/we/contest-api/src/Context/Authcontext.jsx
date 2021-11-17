import { createContext, useState } from "react";

export const Authcontext = createContext();

export const Authcontextprovider = ({ children }) => {

    const [token, setToken] = useState("")
    
    const handletoChange = (newToken) => {
        setToken(newToken)
    }
    
    return <Authcontext.Provider value={{token,handletoChange}}>{ children}</Authcontext.Provider>
}