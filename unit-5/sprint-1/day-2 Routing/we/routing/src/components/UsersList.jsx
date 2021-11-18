import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UsersList() {

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("https://reqres.in/api/users").then(d=>d.json())
            .then((d) => {
    setUsers(d.data)
})

    }, [])

    return (
      <div>
        {users.map((e) => (
          <p key={e.id}>
            <Link to={`/user/${e.id}`}>user {e.first_name}</Link>
          </p>
        ))}
      </div>
    );
}




