import React from 'react'

export function Todoitem({ status, title, id, handleToggle }) {
    
    console.log("todo render");
    return (
        <div>
            <b>{title}</b>:{status ? "Done" : "Not Done"}
            <button onClick={() => {
               handleToggle(id)
            }}>Toggle</button>
        </div>
    )
}

export const MemTodo=React.memo(Todoitem)
