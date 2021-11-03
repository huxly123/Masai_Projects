import React from 'react'
import Tableitem from './Tableitem'
import "./table.css"
import { useState } from 'react'

function Table() {
    const [page,setpage]=useState(1)

    return (
        <div>
                 <table style={{width:"100%"}}>
                     <thead>
                <tr>
                    <th>NAME</th>
                    <th>Age</th>
                    <th>ADDRESS</th>
                    <th>DEPARTMENT</th>
                    <th>SALARY</th>
                    <th>MARITIAL STAE</th>
                    <th>PROFILE PIC</th>
                </tr>
                </thead>
                <tbody>
            <Tableitem page={page}/>
            </tbody>
            </table>
            <button onClick={()=>{
    setpage(page-1)
}}>PREV</button>


            <button onClick={()=>{
    setpage(page+1)
}}>Next</button>


        </div>
    )
}

export default Table
