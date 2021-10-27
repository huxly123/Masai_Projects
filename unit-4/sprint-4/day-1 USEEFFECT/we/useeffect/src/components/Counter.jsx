import React, { useEffect, useState } from 'react'

function Counter() {
const [count,setCount]=useState(10)

useEffect(()=>{
 const set=   setInterval(()=>{
        setCount((prev)=>{
            if(prev===1){ 
                clearInterval(set)
                return 0
            }
            return prev-1
            
        })
    },1000);
    return ()=>{
        console.log("unmounting");
        clearInterval(set)
    }
},[])

    return (
        <div>
            counter:{count}
        </div>
    )
}

export default Counter
