import React, { useState } from 'react'
 import "./counter.css"
function Counter({init}) {
    const [count,setCount]=useState(init)
    const handleDouble=(val)=>{
        setCount(count*val)
    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>ADD</button>
            <button onClick={()=>{handleDouble(2)}}>DOUBLE</button>
        </div>
    )
}

export default Counter
