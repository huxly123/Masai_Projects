import React, { useState } from 'react'
import "./todo.css"
function Todo() {
    const [todo,setTodo]=useState("")
    const [job,setJob]=useState([])


    const handleInp=(e)=>{
setTodo(e.target.value);

    }

    const handleAdd=()=>{
        setJob([...job,todo])
        setTodo("")
    }
    return (
        <div id="main-div">
              {
                job.map(val=>(
                    <div>{val}</div>
                ))
            }
            <input id="inp" value={todo} onChange={handleInp} placeholder="Write Something"/>
            <button onClick={handleAdd}>+</button>
          
        </div>
    )
}

export default Todo
