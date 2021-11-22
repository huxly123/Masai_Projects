import React, { useContext, useState } from 'react'
import { Authcontext } from './Contexts/Authcontext'

function Login() {

    const {token,handleToken}=useContext(Authcontext)

    const [name, setname] = useState("")
    
    const [password, setpassword] = useState("")
    

 

    return (
        <div>
            <input type="text" placeholder="Enter name" onChange={(e) => {
                setname(e.target.value)
            }}/>
            <input type="password" placeholder="Enter password" onChange={(e) => {
                setpassword(e.target.value)
            }}></input>
            <button onClick={() => {
                fetch("https://reqres.in/api/login", {
                    method: "POST",
                    headers: {
                      "Content-Type":"application/json"  
                    },
                    body:JSON.stringify({email:name,password})
                }).then((d) => d.json())
                    .then(({token}) => {
                    handleToken(token)
                })
        }}>Submit</button>
        </div>

    )
}

export default Login
