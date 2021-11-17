import React, { useContext } from 'react'
import { Authcontext } from '../Context/Authcontext'

function Display() {

    const {isAuth}=useContext(Authcontext)
    return isAuth ? <>user logged in</> : <>user logged out</>;
}

export default Display
