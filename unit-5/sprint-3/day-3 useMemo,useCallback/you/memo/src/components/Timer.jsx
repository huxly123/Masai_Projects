import React, { useEffect, useState } from 'react'

function Timer() {

    const [timer, setTimer] = useState(1);

    useEffect(() => {
        setInterval(() => {
          setTimer(prev=>prev+1)
      },1000)  
    }, [])
    
const [text, settext] = useState("");
    const [data,setData]=useState([])

    return (
      <div>
        The time is {timer}
            <input placeholder="title" type="text" onChange={(e) => {
                settext(e.target.value)
            } }/>
            <button onClick={() => {
                setData([
                    ...data,
                    {
                        id: Date.now(),
                        verify: false,
                        title:text

                    }
                ])
        }}>Add</button>
      </div>
    );
}

export default Timer
