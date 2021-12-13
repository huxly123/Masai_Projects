import React, { useState } from 'react'
import style from "./form.module.css"
import axios from "axios"


function Form() {
const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  dob: "",
});

const handleChange = (e) => {
 
  const { name, value, } = e.target;
  setFormData({

    ...formData,
    [name]: value,
  });
};

    const handleSubmit = async(e) => {
        e.preventDefault();
      let {data}=  await axios.post("http://localhost:3001/user", formData);
      if (data) {
        setTimeout(() => {
          alert("ABC")
        },2000)
      }
}

  

    return (
      <div className={style.formbody}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter First name"
              name="first_name"
            ></input>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter Second name"
              name="last_name"
            ></input>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="date"
              placeholder="Enter First name"
              name="dob"
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Form
