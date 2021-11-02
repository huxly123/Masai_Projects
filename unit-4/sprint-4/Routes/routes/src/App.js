import './App.css';
import Homee from './components/Home';
import {Route,Switch,Link} from "react-router-dom"
import Aboutt from './components/About';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
    <button>  <Link to="/">Home</Link></button>
      <Link to="/about">About</Link>
      <Link to="/product/prop">product1</Link>
    <Switch>
      <Route path="/" exact>
      <Homee/>
      </Route>

      <Route path="/about" exact>
<Aboutt/>
      </Route>
      <Route path="/product/:id">
<Product/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
