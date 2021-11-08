import React, { useEffect, useState } from 'react'
import style from "./top.module.css"
import axios from 'axios'

function Top() {
    const [data,setData]=useState({
        id:Math.random(),
username:"",
stock:"",
url:''
    })

    useEffect(()=>{
console.log(1);
    },[data])

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const handleCurrent=async (e)=>{
       
       await axios.post("http://localhost:3001/currentList",{
            data
        })

    }

    const handleOrder=async ()=>{
      axios.post("http://localhost:3001/orderedList",{
            data
        })
        
    }

    return (
        <div className={style.top}>
            <input onChange={handleChange} type="text" placeholder="Enter Name" name="username"></input>
            <input onChange={handleChange} type="text" placeholder="Enter stock" name="stock"></input>
            <input onChange={handleChange} type="text" placeholder="Enter url" name="url"></input>
            <button onClick={handleCurrent}>Current List</button>
            <button onClick={handleOrder}>Ordered List</button>
        </div>
    )
}

export default Top
