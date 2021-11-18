import logo from './logo.svg';
import './App.css';
import {
  Route,
  Switch
} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>

        <Route path="/contact" exact>
          Contact
        </Route>

        <Route path="/about-us" exact>
          About
        </Route>

        <Route path="/services" exact>
          Services
        </Route>

        <Route path="/login" exact>
          Login
        </Route>

        <Route>404: NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export default App;
