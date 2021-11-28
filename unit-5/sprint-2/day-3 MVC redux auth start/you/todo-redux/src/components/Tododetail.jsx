import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

function Tododetail() {

    const { id } = useParams();

    const [user,setUser]=useState([])

    useEffect(async () => {
        gett()
    }, [id])
    
    const gett = async () => {
        
        const { data } = await axios.get(`http://localhost:3001/todos/${id}`);
        // console.log("user:", data);

        setUser([data]);
    }

// console.log("user:",user);
    return (
        <div>
            {
                user.length!==0 &&
                user.map((e) => (
                    <div key={e.id}>
                        <p>{e.title}</p>

                        </div>
                ))
            }
        </div>
    )
}

export default Tododetail
