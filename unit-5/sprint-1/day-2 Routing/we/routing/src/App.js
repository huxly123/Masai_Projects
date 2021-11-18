import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
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

        <Route path="/user/:id" exact>
        <UserDetail/>
        </Route>

        <Route>404not found</Route>
      </Switch>
    </div>
  );
}

export default App;
