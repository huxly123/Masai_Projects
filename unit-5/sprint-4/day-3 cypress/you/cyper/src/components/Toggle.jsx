import React, { useState } from 'react'

function Toggle() {

    const [stat,setstst]=useState(false)

const data=[{status:stat}]

    return (
        <div>
            <input type="checkbox" onChange={() => {
                setstst(!stat)
            }} />
            {
                data.map((a) => {
                    
                     if(a.status===true){return <s style={{ color: "green" }} >Not completed</s>}
            else{return(
                       <p> Not completed</p>
            )
            }
        })
            }

        </div>
    )
}

export default Toggle
