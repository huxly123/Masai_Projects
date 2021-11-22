import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import { Authcontext } from '../Contexts/Authcontext'

function PrivateRoute({children,path,go}) {

    const { token } = useContext(Authcontext);

    if (!token) {
        return (<Redirect to="/login"></Redirect>)
    }
    else {
        return (
            <Route path={path}>
                {children}
            </Route>
        )
    }
}

export default PrivateRoute
