import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Tododetail() {

    const { id } = useParams();

    const [user,setUser]=useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/todos/${id}`)
            .then((d) => d.json())
            .then((d) => {
            setUser(d)
        })
},[id])

console.log(user);
    return (
        <div>
            
        </div>
    )
}

export default Tododetail
