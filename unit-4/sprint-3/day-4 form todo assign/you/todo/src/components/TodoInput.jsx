import React, { useState } from 'react'
import { nanoid } from 'nanoid';
function TodoInput({handleAddTodo}) {
    const [text,setText]=useState("");

    const handleAddtext=(e)=>{
setText(e.target.value)
    }

    const handleClick=()=>{
        const data={
            id:nanoid(4),
            title:text,
status:false
        }
        handleAddTodo(data)
        setText("")
    }
    return (
        <div>
            <input placeholder="Enter Todo" type="text" value={text} onChange={handleAddtext}/>
            <button onClick={handleClick}>Add todo</button>
        </div>
    )
}

export default TodoInput
