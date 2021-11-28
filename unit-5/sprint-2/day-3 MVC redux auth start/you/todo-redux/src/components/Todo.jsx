import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addTodoLoading,
  addTodoSuccess,
  addTodoError,
  getTodoLoading,
  getTodoSuccess,
  getTodoError,
  updateTodoLoading,
  updateTodoSuccess,
  updateTodoError,
} from "../Redux/TodoStore/action";
function Todo() {
  

  useEffect( () => {
    getData()
  }, [])


const getData = () => {
  dispatch(getTodoLoading());
  try {
    fetch("http://localhost:3001/todos").then((d) => d.json())
      .then((d) => {
      dispatch(getTodoSuccess(d));
    })
   
  } catch (err) {
    dispatch(getTodoError(err));
  }
};


  const dispatch = useDispatch();

  const { loading, data } = useSelector((store) => store.todos);
  const [text, setText] = useState("");
  //   console.log(data);
  if (loading)
    return <h2>Loading</h2>
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          style={{
            background: "violet",
            border: "none",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={async () => {
            dispatch(addTodoLoading());
            const payload = {
              id: nanoid(),
              statuss: false,
              title: text,
            };

            try {
              const { data } = await axios.post(
                "http://localhost:3001/todos",
                payload
              );
              dispatch(addTodoSuccess(data));
              getData()
            } catch (err) {
              dispatch(addTodoError(err));
            }
          }}
        >
          ADD{" "}
        </button>
      </div>
      {data.map((e) => (
        <div
          style={{
            padding: "20px",
            border: "1px solid #76FF03",
            marginTop: "10px",
          }}
          key={e.id}
        >
          <span>{e.title}</span>
          {e.statuss? (
            <s style={{ display: "inline", marginLeft: "60px" }}>
              Not completed
              
            </s>
          ):
          !e.statuss && (
            <p style={{ display: "inline", marginLeft: "60px" }}>
              Not completed
            </p>
          )}
          <button
            style={{
              cursor: "pointer",
              marginLeft: "80px",
              background: "#FF5722",
              border: "none",
              padding: "5px",
              borderRadius: "4px",
            }}
            onClick={async () => {
              dispatch(updateTodoLoading())
              try {
              const {data}=  await axios.patch(`http://localhost:3001/todos/${e.id}`, {
                  statuss: !e.statuss,
              })
                dispatch(updateTodoSuccess(data))
                getData()
              } catch (err) {
                dispatch(updateTodoError(err))
              }
    
            }}
          >
            Toggle
          </button>
          <Link to={`/todo/${e.id}`}>
            {" "}
            <button
              style={{
                cursor: "pointer",
                marginLeft: "80px",
                background: "#90A4AE",
                border: "none",
                padding: "5px",
                borderRadius: "4px",
              }}
            >
              Edit
            </button>
          </Link>
          <button
            style={{
              cursor: "pointer",
              marginLeft: "80px",
              background: "blue",
              border: "none",
              padding: "5px",
              borderRadius: "4px",
            }}
            onClick={async () => {
              await axios.delete(`http://localhost:3001/todos/${e.id}`);
              getData();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todo;
