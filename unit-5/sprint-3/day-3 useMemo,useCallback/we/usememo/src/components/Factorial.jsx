import React, { useMemo, useState } from 'react'

function fact(num) {
    if (num <=0) {
        return 1
    }
     console.log("factorial");
    return num* fact(num-1)
}
function fib(num) {
    if (num < 2) {
        return num
    }

    return fib(num-1)+fib(num-2)
}

function Factorial() {

    const [, forcerender] = useState(0);

    const [num, setnum] = useState(0)
    
   

    const factorial=useMemo(()=>fib(num),[num])

    return (
      <div>
        <h2>
          The factorial of {num}is {factorial}
        </h2>
        <input
          onChange={(e) => {
            setnum(e.target.value);
          }}
        />

        <button
          onClick={() => {
            forcerender((p) => p + 1);
          }}
        >
          Force
        </button>
      </div>
    );
}

export default Factorial
