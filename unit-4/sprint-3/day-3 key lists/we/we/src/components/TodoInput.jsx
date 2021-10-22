import React, { useState } from 'react'
import { nanoid } from 'nanoid'
function TodoInput({handleAddTodo}) {
    const [text,setText]=useState("")

    const handleChange=(e)=>{
      setText(e.target.value)
    };

    const handleClick=()=>{
const data={
    id:nanoid(4),
    title:text,
    status:false,
}

        handleAddTodo(data)
        setText("")
    }
    return (
        <div>
            <input type="text" placeholder="Enter Todo" value={text} onChange={handleChange}/>
       <button onClick={handleClick}>ADD TODO</button>
        </div>
    )
}

export default TodoInput
