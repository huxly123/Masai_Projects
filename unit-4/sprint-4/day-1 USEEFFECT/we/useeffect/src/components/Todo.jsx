import React from 'react'
import { useState,useEffect } from 'react';
function Todo() {

    const [data,setData]=useState([]);
    const [text,setText]=useState("");
    const [page,setpage]=useState(1)
 useEffect(()=>{gettodos()},[page])
   const gettodos=()=>{
       fetch(`http://localhost:3001/todo?_page=${page}&_limit=3`).then((d)=>d.json())
       .then((res)=>{
           setData(res)
       })
   }
const handleAddTodo=()=>{
    fetch("http://localhost:3001/todo",{
        method:"POST",
        body:JSON.stringify({
            title:text,
            status:false
        }),
        headers:{
            "Content-Type":"application/json"
   },    }).then(gettodos)
   setText("")
    }


    return (
        <div>
  <input type="text" onChange={(e)=>setText(e.target.value)}></input>
  <button onClick={handleAddTodo}>Add Todo</button>
  {
      data.map((e)=>(
          <div key={e.id}>{e.title}</div>
      ))
  }
  

<button onClick={()=>{setpage(page+1)}}>NEXT</button>
        </div>
    )
}

export default Todo