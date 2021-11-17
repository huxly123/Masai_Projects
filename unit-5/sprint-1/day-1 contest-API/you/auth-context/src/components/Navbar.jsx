import React, { useContext } from 'react'
import { Authcontext } from '../Context/Authcontext'

function Navbar() {

    const {  authChange } = useContext(Authcontext)
    


    return (
        <div>
            <button onClick={() => {
                authChange(true)
            }}>Login</button>

            <button onClick={() => {
                authChange(false)
            }}>Logout</button>
        </div>
    )
}

export default Navbar
