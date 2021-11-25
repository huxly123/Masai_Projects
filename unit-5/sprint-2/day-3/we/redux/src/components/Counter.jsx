import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addCount,subCount} from "../Redux/CounterStore/action"

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((store) => store.count.count);
  console.log("count");
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(subCount(1));
        }}
      >
        sub
      </button>
    </div>
  );
}

export default Counter;
