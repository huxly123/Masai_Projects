import React from 'react'
import { useState } from 'react'

function Counter({init}) {
    const [count,setcount]=useState(1)
const handleAdd=(value)=>{
    setcount(count+value)
}
const [age,ageupdate]=useState(init)
    return (
        <div>
             <h1>Counter:{count}</h1>
 <button onClick={()=>{
     handleAdd(1)
 }}>ADD 1</button>


 <h1>Age:{age}</h1>
  <button onClick={()=>{
 ageupdate(age+1)
 }}>ADD 1</button>
  <button disabled={age===0} onClick={()=>{
 ageupdate(age-1)
 }}>SUB 1</button>
        </div>
    )
}

export default Counter
