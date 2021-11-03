import React from 'react'
import Navchild from './Navchild'
import { Ul } from './Custom/Ul'

function Navbar() {
    return (
        <div className="navbar">
            <Navchild/>
<Ul >
    <li>About us</li>
    <li>Prices</li>
    <li>Start page</li>

    <li>Offer</li>

    <li>Contact</li>

</Ul>
        </div>
    )
}

export default Navbar
