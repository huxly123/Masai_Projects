import React from 'react'
import { useState,useEffect } from 'react';
function Db() {

    const [data,setData]=useState([]);
    const [counter,setCounter]=useState(3)
    useEffect(()=>{
      console.log("clicked");
    fetch("http://localhost:3001/todo")
    .then((d)=>d.json())
    .then((res)=>{
    // console.log("res",res);
    
    setData(res)
    })
    },[counter])


    return (
        <div>
              {data.map(e=>(
        <div key={e.id}>{e.title}</div>
  ))}
   <button onClick={()=>{
     setCounter(counter+1)
   }}>ADD</button>
        </div>
    )
}

export default Db
