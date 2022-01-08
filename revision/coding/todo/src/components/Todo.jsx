import React, { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [click, setClick] = useState(0);
  const [comp, setComp] = useState("All");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [click]);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3004/todos`);
    setDatas(data);
  };

  const handleSubmit = async (e) => {
    let list = {
      todo: todo,
      status: false,
    };

    setData([...data, list]);
    setTodo("");
    try {
      await axios.post(`http://localhost:3004/todos`, list);
    } catch (err) {
      console.log("err:", err.message);
    }
  };
  // console.log(datas);
  console.log(comp);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>ADD</button>
      <select
        onChange={(e) => {
          setComp(e.target.value);
        }}
      >
        <option value="ALL">ALL</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>

      <div>
        {datas.map((e) => (
          <div
            style={{ display: "flex", justifyContent: "center", gap: "50px" }}
            key={e.id}
          >
            <p>{e.todo}</p>
            <p>{e.status ? "Not Completed" : "Completed"}</p>
            <button
              onClick={async () => {
                const status = !e.status;
                await axios.patch(`http://localhost:3004/todos/${e.id}`, {
                  status: status,
                });
                setClick((prev) => prev + 1);
              }}
            >
              Toggle Status
            </button>
            <button
              onClick={async () => {
                await axios.delete(`http://localhost:3004/todos/${e.id}`);
                setClick((prev) => prev + 1);
              }}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
      {comp == "Completed" ? (
        <div>
          <h1>Completed Ones</h1>
          {datas
                      .filter((ele) => {return ele.status === true })
            .map((e) => (
              <div key={e.id}>
                <p>{e.status}</p>
              </div>
            ))}
        </div>
      ) : comp == "Not Completed" ? (
        <div>
          <h1>Not completd</h1>
          {datas
            .filter((ele) =>{
              return ele.status === true;
            })
            .map((e) => (
              <div key={e.id}>
                <p>{e.status}</p>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <h1>All</h1>
          {datas.map((e) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
              }}
              key={e.id}
            >
              <p>{e.todo}</p>
              <p>{e.status ? "Not Completed" : "Completed"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
