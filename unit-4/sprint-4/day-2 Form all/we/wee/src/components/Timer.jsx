import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [count,setcount]=useState(0);

    const counterref=useRef(0)
  
    useEffect(()=>{
        handlestart()
    },[])

    const handlestart=()=>{
        counterref.current = setInterval(()=>{
            setcount((prev)=>prev+1)
        },1000)
    }
    return (


        <div>
            <h1>counter:</h1>
            <p>{count}</p>
            <button onClick={()=>{clearInterval(counterref.current)}}>Pause</button>
        <button onClick={()=>{handlestart()}}>RESUME</button>
        <button onClick={()=>{
            setcount(0)
        }}>Start</button>
        </div>
    )
}

export default Timer
