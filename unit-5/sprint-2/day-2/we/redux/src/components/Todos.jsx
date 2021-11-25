import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addTodoLoading, addTodoSuccess, addTodoError, getTodoLoading, getTodoSuccess, getTodoError } from "../Redux/action";


function Todos() {

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        dispatch(getTodoLoading());
        try {
            const { data } = await axios.get("http://localhost:3001/todos");
            dispatch(getTodoSuccess(data))
        } catch (err) {
            dispatch(getTodoError(err))
        }
}

    const dispatch = useDispatch();

    const  {loading,data}  = useSelector((store) => store.todos);
    
    // console.log("todo",data);

const [text,setText]=useState("")
    return loading?("Loading"):(
        <div>
            <input type="text" placeholder="Enter todo" onChange={(e)=>setText(e.target.value) }/>
            <button onClick={
              async  () => {
                    dispatch(addTodoLoading())
                    const payload = {
                        status: false,
                        title:text
                    }
                    try {
                        const {data} =await axios.post("http://localhost:3001/todos", payload);
                        dispatch(addTodoSuccess(data))
                    } catch (err) {
                        dispatch(addTodoError(err))
                   }
                    
                }
            }>ADD TODO</button>

            {data.map((e) => (
                <div key={e.title}>{ e.title }</div>
            ))
            }
        </div>
    )
}

export default Todos
