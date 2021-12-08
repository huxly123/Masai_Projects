import React, { useState } from 'react'
import TodoInput from './TodoInput'
export default function Tod() {

    const [text, settext] = useState("")
    const [todos,settodos]=useState([])
    return (
        <div>
            <input type="text" placeholder="enter todo" onChange={(e) => {
                settext(e.target.value)
            }} />
            <button 
            data-testid="addbtn"
                onClick={() => {
                settodos([...todos,text])
            }}>add</button>
            {
                todos.map((e,i) =><TodoInput key={i} title={e} ></TodoInput>)
            }
        </div>
    )
}
