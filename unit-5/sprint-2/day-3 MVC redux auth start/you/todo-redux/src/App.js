import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Todo from './components/Todo';
import Tododetail from './components/Tododetail';
import { PrivateRoute } from './Route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Link to="/todo">Todo</Link>

      <Link to="/login">Login</Link>

      <Switch>
        <Route path="/" exact>
          <h1>HOME</h1>
        </Route>

        <PrivateRoute path="/todo" exact>
          <Todo />
        </PrivateRoute>

        <PrivateRoute path="/todo/:id" exact>
          <Tododetail />
        </PrivateRoute>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route>404 Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
