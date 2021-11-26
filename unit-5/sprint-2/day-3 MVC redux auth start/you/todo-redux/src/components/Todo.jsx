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
} from "../Redux/action";
function Todo() {


const getData = async () => {
  dispatch(getTodoLoading());
  try {
    const { data } = await axios.get("http://localhost:3001/todos");
    dispatch(getTodoSuccess(data));
  } catch (err) {
    dispatch(getTodoError(err));
  }
};


  useEffect(() => {
    getData();
  }, []);

  

  const dispatch = useDispatch();

  const { loading, data } = useSelector((store) => store.todos);
  const [text, setText] = useState("");
//   console.log(data);
  return loading ? (
    "Loading..."
  ) : (
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
          {e.status && (
            <s style={{ display: "inline", marginLeft: "60px" }}>
              Not completed(complete)
            </s>
          )}
          {!e.status && (
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
            }} onClick={async () => {
                    console.log("clicked");
                   
                      await axios.patch(`http://localhost:3001/todos/${e.id}`, {
                        statuss: !e.statuss,
                      });
              getData()
  //        fetch(`http://localhost:3001/todos/${e.id}`, {
  //          method: "PATCH",
  //          headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "Accept",
  //   "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE",
  // },
  //          body: JSON.stringify({
  //            satuss: false,
  //          }),
  //          redirect: "follow",
  //        })
  //          .then((response) => response.text())
  //          .then((result) => console.log(result))
  //          .catch((error) => console.log("error", error))
              
                     
            }}
          >
            Toggle
          </button>
         <Link to={`/todo/${e.id}`}> <button
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
          </button></Link>
        </div>
      ))}
    </div>
  );
}

export default Todo;
