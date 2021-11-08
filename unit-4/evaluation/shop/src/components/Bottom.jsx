import React, { useEffect } from 'react'
import style from "./bottom.module.css"
import axios from 'axios'
import { useState } from 'react';

function Bottom() {
    const [datas,setdata]=useState([]);
    const [orderdata,setorderdata]=useState([])
    useEffect(()=>{

    },[datas,orderdata])

    const getcurrent=async()=>{
        try{
let {data}=await axios.get("http://localhost:3001/currentList")
// console.log(data.username);
setdata(data)
        }catch(err){
            console.log(err.message);
        }
    }

    const getorder=async()=>{
        try{
        let {data}=await axios.get("http://localhost:3001/orderedList")
        // console.log(data);
       setorderdata(data)
        }catch(err){
            console.log(err.message);
        }
            }


     
          
    return (
        <div className={style.bottom}>
            <button onClick={getcurrent}>Display current List</button>
            <button onClick={getorder}>Display order List</button>
            <h1 style={{color:"#FFFF00"}}>CURRENT LIST</h1>
<div className={style.grid}>
{
    datas.map((dat)=>(
        <div key={dat.data.id}>
<img src={dat.data.url} alt="img"></img>
<h1>{dat.data.username}</h1>
<p>{dat.data.stock}</p>
</div>
    ))
}
</div>

            <h1>ORDERED LIST</h1>
            <div className={style.grid}>
            {
    orderdata.map((dat)=>(
        <div key={dat.data.id}>
<img  src={dat.data.url} alt="img"></img>
<span > {dat.data.username}</span>
<p >{dat.data.stock}</p>
<button onClick={async ()=>{
await axios.post("http://localhost:3001/currentList",{
    username:dat.data.username,
stock:dat.data.stock,
url:dat.data.url
})
}}>Swap to current List</button>
</div>
    ))
}

</div>
        </div>
    )
}

export default Bottom
