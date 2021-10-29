import React, { useRef, useState } from 'react'

function Form() {

const  inputRef=useRef(null)

const [formData,setFormData]=useState({
    username:"",
    age:"",
    isMarried:false
})

const handleSubmit=(e)=>{
    e.preventDefault();
console.log(formData);
}

const handleChange=(e)=>{
     console.log(inputRef.current.files[0]);
const {name,value,checked,type}=e.target;
setFormData({
    ...formData,
    [name]: type==="checkbox" ? checked:value
})
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="Enter Name" name="username" ></input>
            <input type="number" onChange={handleChange} placeholder="Ener age" name="age"></input>
        <br/>

       isMarried: <input onChange={handleChange} type="checkbox" name="isMarried"/>
        
        <br/>
<select name="country" onChange={handleChange}>
<option value="india">india</option>
<option value="norway">norway</option>
    </select>
        <br/>
        <input type="file" onChange={handleChange} ref={inputRef} />
        <button type="submit" >Submit</button>
        </form>
        </div>
    )
}

export default Form
