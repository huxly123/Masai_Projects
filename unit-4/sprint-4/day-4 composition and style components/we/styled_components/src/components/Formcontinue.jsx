import React from 'react'
import Form from './Form';
function Formcontinue() {
    return (
        <div>
            <Form onSubmit={(e)=>{
    e.preventDefault();
    console.log("signin");
  }}>
    <input type="text" placeholder="name"></input>
    <input type="current-password" placeholder="password"></input>
    <input type="submit" placeholder="sign-in"></input>

  </Form>

  <Form onSubmit={(e)=>{
e.preventDefault();
console.log("signup");
  }}>
    <input type="text" placeholder="name"></input>
    <input type="current-password" placeholder="Password"></input>
    <input type="text" placeholder="email"></input>

    <input type="submit" placeholder="sign-up"></input>
  
  
  </Form>
        </div>
    )
}

export default Formcontinue