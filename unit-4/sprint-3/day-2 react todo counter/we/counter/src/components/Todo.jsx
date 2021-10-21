import React, { useState } from 'react'

function Todo() {
    const [text,setText]=useState("");

    const [todo,settodo]=useState([])
const handleChange=(e)=>{
  
    setText(e.target.value)
  
}

const handleAdd=()=>{
   settodo([...todo,text])
  setText("")
}
    return (
        <div>
            <input value={text} onChange={handleChange} type="text" placeholder="Enter Todo"/>
            <button onClick={handleAdd}>Add Todo</button>
            {
                todo.map(val=>(
                    <div>{val}</div>
                ))
            }
        </div>
    )
}

export default Todo
