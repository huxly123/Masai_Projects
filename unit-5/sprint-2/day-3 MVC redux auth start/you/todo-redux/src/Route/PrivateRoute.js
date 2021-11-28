import { useContext } from "react";

import {Redirect} from "react-router-dom"
import {Route} from "react-router-dom"

export const PrivateRoute = ({ children, path }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Redirect to="/login"></Redirect>;
    }

    return <Route path={path}>{children}</Route>
}