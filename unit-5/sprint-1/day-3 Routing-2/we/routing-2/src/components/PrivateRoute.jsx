import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { Authcontext } from "./Context/Authcontext";

export const PrivateRoute = ({ children, path }) => {
  const { token } = useContext(Authcontext);

  if (!token) {
    return <Redirect to="/login"></Redirect>;
  }

  return <Route path={path}>{children}</Route>;
};
