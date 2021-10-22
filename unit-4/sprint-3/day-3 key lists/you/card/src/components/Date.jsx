import React from 'react'

function Datee({datee,url}) {
    return (
        <div style={{margin:"center",marginTop:"40px"}}>
            <span><h3>{datee}</h3></span><span><img style={{width:"5%",marginLeft:"60%",marginBottom:"5px",display:"inline"}} src={url}/>
       </span> </div>
    )
}

export default Datee
