import React, { useState } from 'react'
import axios from 'axios'

function Card() {
const [text,settext]=useState("")



    const handleChange=(e)=>{
settext(e.target.value)
    }
    
const gethandler=async (e)=>{
    try{
const {data}=await axios.get(`https://api.github.com/users/${text}`)
console.log(data);
    }catch(err){
        console.log("err:",err.message);
    }
}
    return (
        <div>
            <input onChange={handleChange}></input>
            <button onClick={gethandler}>Find</button>
        </div>
    )
}

export default Card
