import './App.css';
import {  Switch, Route, Link } from "react-router-dom"
import  Dashboard  from "./components/Dashboard"
import  NewShows  from "./components/NewShows"
import Individual  from "./components/Individual"
import Login  from "./components/Login"
import About from "./components/About"
import { PrivateRoute } from './Route/PrivateRoute';
import Qr from './components/Qr';
import { useEffect, useState } from 'react';

function App() {

  const [change,setchange]=useState(0)

  useEffect(() => {
  
},[change])


  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
       <p> <Link
          style={{ textDecoration: "none", color: "orange", fontSize: "20px" }}
          to="/"
        >
          Dashboard
        </Link></p>
        <p>  <Link
          style={{ textDecoration: "none", color: "orange", fontSize: "20px" }}
          to="login"
        >
          Login
        </Link></p>
       <p>   <Link
          style={{ textDecoration: "none", color: "orange", fontSize: "20px" }}
          to="about"
        >
          About
        </Link></p>
        <p>  <Link
          style={{ textDecoration: "none", color: "orange", fontSize: "20px" }}
          to="shows"
        >
          New Shows
        </Link></p>
      
          <p> 
          <button
            style={{
             borderRadius:"4px",
              margin: "auto",
              width: "100px",
              background: "red",
              cursor: "pointer",
              border: "none",
              height: "30px",
              color: "white"
              
            }}
            onClick={() => {
            setchange(change+1)
              localStorage.removeItem("token")
            }
       
            }
          >
            Log Out
          </button>
      </p>
      </div>

      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>

        <Route path="/shows" exact>
          <NewShows />
        </Route>

        <PrivateRoute path="/shows/:id" exact>
          <Individual />
        </PrivateRoute>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/qr" exact>
          <Qr />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
