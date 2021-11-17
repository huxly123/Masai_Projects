import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {

    const [isAuth, setisAuth] = useState(false)

    const authChange = (change) => {
        setisAuth(change)
    }

    return <Authcontext.Provider value={{isAuth,authChange}}>{children}</Authcontext.Provider>
}