import { createContext, useState } from "react";

import { store } from "./store";

export const Appcontext = createContext();

export const AppcontextProvider = ({ children }) => {
    
    const { dispatch, getstate } = store
    const value = { dispatch, getstate }
    const [state, setstate] = useState(0);
    const forceUpdate = () => setstate((prev) => prev + 1);

    store.subscribe(forceUpdate)


    return (
        <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
    )
}