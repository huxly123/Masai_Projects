import React, { useState } from 'react'

function Slider() {

    const question = [1, 2, 3, 4, 5, 6]
    
    const [state,setState]=useState(0)

    return (
        <div>
            <button disabled={state == question.length - 1} onClick={() => {
                setState(state+1)
            }}>Next</button>
            <button disabled={state == 0} onClick={() => {
                setState(state-1)
            }}>Prev</button>
        </div>
    )
}

export default Slider
