import React, { useState } from 'react'
import Todoitem from './Todoitem'
function Todo() {
const [text,settext]=useState("")

    const handleToggle = (id) => {
        console.log("id",id);
    }
    
    
const [todoList,setTodolist]=useState([])
    return (
        <div>
            <input type="text" placeholder="todo" onChange={(e) => {
settext(e.target.value)
            }} />
            <button onClick={() => {
                setTodolist([...todoList,{id:Date.now(),status:false,title:text}])
            }}>Add</button>

            {
                todoList.map((e) => {
                    return <Todoitem key={e.id} handleToggle={handleToggle} {...e}></Todoitem>
                })
            }
        </div>
    )
}

export default Todo
