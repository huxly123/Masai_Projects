import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/" exact>
          <h1>home</h1>
        </Route>

        <Route path="/about" exact>
          <h1>About</h1>
        </Route>

        <Route path="/contact">
          <h1>contact us:</h1>
          <p>chennai</p>
        </Route>

        <Route path="/users" exact>
          <UsersList />
        </Route>

        <PrivateRoute path="/user/:id" exact>
          <UserDetail />
        </PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>

        <Route>404not found</Route>
      </Switch>
    </div>
  );
}

export default App;
