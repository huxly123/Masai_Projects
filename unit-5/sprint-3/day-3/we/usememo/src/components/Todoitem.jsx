import React from 'react'

function Todoitem({status,title,id,handleToggle}) {
    return (
        <div>
            <b>{title}</b>:{status ? "Done" : "Not Done"}
            <button onClick={() => {
               handleToggle(id)
            }}>Toggle</button>
        </div>
    )
}

export default Todoitem
