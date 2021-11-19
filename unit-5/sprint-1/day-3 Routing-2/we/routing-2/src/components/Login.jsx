import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { Authcontext } from "./Context/Authcontext";

function Login() {
  const { token, handleToken } = useContext(Authcontext);

  const [name, setname] = useState("");

  const [password, setpassword] = useState("");

  if (token) {
    return <Redirect to="/users"/>
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="enter password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: name, password }),
          })
            .then((d) => d.json())
            .then(({token}) => {
              handleToken(token);
            });
        }}
      >Login</button>
    </div>
  );
}

export default Login;
