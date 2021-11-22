import { Route, Switch, Link } from "react-router-dom";
import React from "react";
import Home from "../Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard";
import Settings from "../Settings";
import Login from "../Login"

function Routes() {
    return (
      <div>
        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/settings">Settings</Link>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <PrivateRoute path="/dashboard"  exact>
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute
            path="/dashboard/settings"
           
            exact
          >
            <Settings />
          </PrivateRoute>

          <Route>
            <h1>404 Not:Found</h1>
          </Route>
        </Switch>
      </div>
    );
}

export {Routes};
