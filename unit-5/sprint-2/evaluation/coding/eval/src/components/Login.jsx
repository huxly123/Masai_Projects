import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addLoginError,
  addLoginloading,
  addLoginSuccess,
} from "../Redux/AuthStore/action";
import { Redirect } from "react-router-dom";

function Login() {
  const [name, setname] = useState("");

  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.auth);

  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/" />;
  }

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addLoginloading());
          try {
            fetch("https://reqres.in/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: name, password }),
            })
              .then((d) => d.json())
              .then(({ token }) => {
                dispatch(addLoginSuccess(token));
              });
          } catch (err) {
            dispatch(addLoginError(err));
          }
          alert("login succesfull");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
