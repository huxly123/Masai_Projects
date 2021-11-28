import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

function Login() {

    // const dispatch = useDispatch();

    // const {loading,isAuth,token}=useSelector((store)=>store)

    return (
        <div>
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter Password" />
            <button onClick={() => {
                
            }}>Login</button>
        </div>
    )
}

export default Login
