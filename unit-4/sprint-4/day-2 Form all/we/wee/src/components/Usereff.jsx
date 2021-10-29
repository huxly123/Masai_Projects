import React, { useEffect, useRef } from 'react'

function Usereff() {
    const elemref=useRef(null);
    const elemref1=useRef(null)
useEffect(()=>{
    console.log(elemref.current);
elemref.current.focus()
},[])
    return (
        <div>
            <div style={{width:"300px",height:"400px",background:"blue"}} ref={elemref1}></div>
            <input ref={elemref}></input>
            <div style={{width:"300px",height:"400px",background:"yellow"}}></div>
            <div style={{width:"300px",height:"400px",background:"black"}}></div>
            <button onClick={()=>{
                elemref1.current.scrollIntoView({
                    behaviour:"smooth"
                })
            }}>
                {" "}
                Scroll to top</button>
        </div>
    )
}

export default Usereff
