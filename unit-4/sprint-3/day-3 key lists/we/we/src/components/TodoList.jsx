import React from 'react'

function TodoList({list,handleToggle}) {
    return (
        <div>
            {
                list.map((e)=>(
                    <p key={e.id}>
                        {e.title} - {e.status ? "Done" :"Not Done"}
                        <button onClick={()=>{handleToggle(e.id)}}>Change status</button>
                        </p>
                     
                ))
            }
        </div>
    )
}

export default TodoList
