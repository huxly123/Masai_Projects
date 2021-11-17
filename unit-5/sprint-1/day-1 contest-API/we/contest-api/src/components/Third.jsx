import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { AppContext } from '../Context/AppContext'
function Third() {

    const {state,handleChange}=useContext(AppContext)

    return (
        <div>
            <p>state:{state}</p>
            <button onClick={() => {
                handleChange("hello")
           }}>change</button>
        </div>
    )
}

export default Third
