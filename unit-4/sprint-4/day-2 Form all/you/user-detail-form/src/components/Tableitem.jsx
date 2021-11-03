import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import "./tableitem.css"
function Tableitem({page}) {
const [element,setelement]=useState([])


    useEffect(()=>{
        getdata()
        },[page])

        const getdata=async ()=>{
            const {data}= await axios.get("http://localhost:3001/users",{
                params:{
                    _page:page,
                    _limit:1
                }
            })
          //  console.log("data:",data);
            setelement(data)
            }

    return (
       <>
  
{
    element.map((ele)=>(
        <tr key={ele.id}>
<td>{ele.Name}</td>
<td>{ele.Age}</td>
<td>{ele.Address}</td>
<td>{ele.Department}</td>
<td>{ele.Salary}</td>
<td>{ele.Maritial_status?"Yes":"No"}</td>
<td><img style={{width:"50px",height:"50px"}} src={ele.profile_photo} alt="profile pic"/></td>

        </tr>
    ))
}

 </>
    )
}

export default Tableitem
