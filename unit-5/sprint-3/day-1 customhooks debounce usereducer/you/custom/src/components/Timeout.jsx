import React from 'react'
import useTimeout from '../utils/Usetimeout'



function Timeout() {
 
    const {state}=useTimeout(5000)
console.log(state);
    return (
        <div>
            state:{state && <h1>true</h1>}
            {!state&&<h1>false</h1>}
        </div>
    )
}

export default Timeout
