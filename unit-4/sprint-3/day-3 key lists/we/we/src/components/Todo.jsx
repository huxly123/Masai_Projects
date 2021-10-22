import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
function Todo() {
const [todoList,setTodoList]=useState([]);

const handleAddTodo=(todo)=>{
    setTodoList([...todoList,todo])
}

const handleToggle=(id)=>{
 const updatedList=  todoList.map(todo=>{
       if(todo.id===id){
todo.status=!todo.status
       }
       return todo
   })
//    console.log(updatedList);
setTodoList(updatedList)
}

    return (
        <div>
            <TodoInput handleAddTodo={handleAddTodo}/>
          <TodoList list={todoList} handleToggle={handleToggle}/>
       <button onClick={()=>{
         const updated=  todoList.filter((e)=> !e.status);
           setTodoList(updated)
       }}>Show Not Completed</button>
       </div>
    )
}

export default Todo
