import React from 'react'

function synthetic() {
    const [mouseposition,setmouseposition]=useState("")

    return (
        <div>
            <div onMouseMove={(e)=>setmouseposition(`${e.clientX}-${e.clientY}`)}  style={{width:"200px",height:"200px",backgroundColor:"yellow",color:"white"}}>
  Mouse: {mouseposition}
  </div>
  <input onKeyDown={(e)=>console.log(e)} />
        </div>
    )
}

export default synthetic
