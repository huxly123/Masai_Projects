import axios from 'axios'
import React, {useRef,   useState } from 'react'


function Form() {
const inputRef=useRef(null)



    const [formdata,setformdata]=useState({
        Name:"",
        Age:"",
        Address:"",
        Department:"",
        Salary:"",
        Maritial_status:false,
        profile_pic:""
    
    })

    const handlechange=(e)=>{
       const file=inputRef.current.files[0];
       console.log("file:",file);
        const {name,value,checked,type}=e.target
setformdata({
    ...formdata,
    [name]:type==="checkbox"? checked :type==="file"?file:value
})
    }

    const handleSubmit=async (e)=>{
       e.preventDefault();
        
      await axios.post("http://localhost:3001/users",
          formdata
      );

    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input name="Name" placeholder="enter name" type="text" onChange={handlechange}></input>
            <input name="Age" placeholder="Enter Age" type="number" onChange={handlechange}></input>
            <input name="Address" placeholder="Enter Address" type="" onChange={handlechange}></input>
            <input name="Department" placeholder="Enter department" type="text" onChange={handlechange}></input>
            <input name="Salary" placeholder="Enter salary" type="number" onChange={handlechange}></input>
         <div>   IS MARRIED:
            <input name="Maritial_status" type="checkbox" onChange={handlechange}></input></div>
            <input type="file" onChange={handlechange} ref={inputRef} />
<button type="submit">sub</button>
</form>

        </div>
    )
}

export default Form
