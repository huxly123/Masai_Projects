import React, { useCallback, useState } from "react";
import{ Todoitem,  MemTodo } from "./Todoitem";
function Todo() {
  const [text, settext] = useState("");

    const handleToggle =useCallback( (id) => {
        console.log("id", id);
    }
  ,[])

  const [todoList, setTodolist] = useState([]);
  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodolist([
            ...todoList,
            { id: Date.now(), status: false, title: text },
          ]);
        }}
      >
        Add
      </button>

      {todoList.map((e) => {
        return (
          <MemTodo key={e.id} handleToggle={handleToggle} {...e}></MemTodo>
        );
      })}
    </div>
  );
}

export default Todo;
