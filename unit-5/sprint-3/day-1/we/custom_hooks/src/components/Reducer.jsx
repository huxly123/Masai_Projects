import React, { useReducer } from 'react'
    const reducer = (state, { type, payload }) => {
      switch (type) {
        case "INC_COUNT":
          return {
            ...state,
            count: state.count + payload,
          };
        default:
          return { ...state };
      }
    };
function Reducer() {

//const [state,setstate]=usestate();
const [state,dispatch]=useReducer(reducer,{count:0})

    return (
        <div>
            <h3>count:{state.count}</h3>
            <button onClick={() => {
                dispatch({type:"INC_COUNT", payload:1})
            }}>ADD</button>
        </div>
    )
}

export default Reducer
