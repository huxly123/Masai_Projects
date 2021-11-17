const { createContext, useState } = require("react");


export const Themecontext = createContext();

export const ThemecontextProvider = ({ children }) => {
    
    const [theme, setTheme] = useState("light")
    
    const handleTheme = (change) => {
        setTheme(change)
    }

    return <Themecontext.Provider value={{theme,handleTheme}}>{children}</Themecontext.Provider>
}

