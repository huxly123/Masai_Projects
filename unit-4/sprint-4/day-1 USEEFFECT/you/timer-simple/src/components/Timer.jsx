import React, { useEffect, useState } from 'react'

function Timer({initialtime,finaltime}) {
const [data,setdata]=useState(initialtime)
//  const [final]=useState(finaltime)
// console.log(final);
    useEffect(()=>{
const set=setInterval(()=>{
setdata((prev)=>{
    if(prev===finaltime-1){
        clearInterval(set)
        return finaltime
    }
    return prev+1
})

},1000);
return()=>{
    console.log("unmounting");
     clearInterval(set)
}
    },[])


    return (


        <div>
            <h3>Counter</h3>
            <p>{data}</p>
        </div>
    )
}

export default Timer
