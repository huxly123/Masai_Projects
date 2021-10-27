import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default function Todo() {
    const [todolist,setTodolist]=useState([]);
const handleAddTodo=(todo)=>{
setTodolist([...todolist,todo])
}
const handleToggle=(id)=>{
const updatedList=todolist.map(todo=>{
    if(todo.id===id){
        todo.status= !todo.status
    }
    return todo
})
setTodolist(updatedList)
}

    return (
        <div>
            <TodoInput handleAddTodo={handleAddTodo}/>
            <TodoList list={todolist} handleToggle={handleToggle}/>
            <button onClick={()=>{
const updated=todolist.filter((e)=>!e.status);
setTodolist(updated)
            }}>Show not completed</button>
        </div>
    )
}

