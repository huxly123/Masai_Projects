import { useState } from "react"


export const Form=()=>{
    const [formData,setFormData]=useState({
      
    })

    const handleChange=(e)=>{
        //console.log(e.target.name,e.target.value);
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
e.preventDefault();
        console.log(formData);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Enter Name" onChange={handleChange}></input>
                <input name="age" type="Number" placeholder="Enter Age" onChange={handleChange}></input>
                <button  type="submit">Click</button>
            </form>
        </div>
    )
}