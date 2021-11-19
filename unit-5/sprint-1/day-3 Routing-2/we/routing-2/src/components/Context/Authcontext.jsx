import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleToken = (newToken) => {
    setToken(newToken);
  };
  return (
      <Authcontext.Provider value={{ token, handleToken }}>
      {children}
    </Authcontext.Provider>
  );
};
