// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { todoos } from '../util/request';
function Todo() {

const [data,setdata]=useState([]);
const [text,settext]=useState("");
const [page,setpage]=useState(1);

// const [loading,setloadind]=useState(true);

useEffect(()=>{
gettodos()
},[page])
const gettodos=async ()=>{
    try{
const {data}=await todoos.get("/todo",{
    params:{
        _page:page,
        _limit:2
    }
})
setdata(data)
}catch(err){
    console.log(err.message);
}
}

const handleAddtodo= async ()=>{
    // fetch("http://localhost:3001/todo",
    // {
    //     method:"POST",
    //     body:JSON.stringify({
    //         title:text,
    //         status:false
    //     }),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }
    // ).then(gettodos)
await todoos.post("/todo",{
    title:text,
         status:false
})
   gettodos()
}

    return (
        <div>
            <input type="text" onChange={(e)=>{
                settext(e.target.value)
            }}></input>
            <button onClick={handleAddtodo}>Add todo</button>
            {
                data.map((e)=>(
                    <div key={e.id}>{e.title}</div>
                ))
            }
            <button onClick={
                ()=>{
                    setpage(page+1)
                }
            }>NEXT</button>
        </div>
    )
}

export default Todo
