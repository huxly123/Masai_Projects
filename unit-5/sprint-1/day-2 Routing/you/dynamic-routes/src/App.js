
import './App.css';
import {Route,Switch} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Allproducts from './components/All_products/All_products';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact>Home</Route>

        <Route path="/products" exact><Allproducts/></Route>

        <Route path="/products/:id" exact><Product/></Route>

        <Route>Home</Route>
      </Switch>
    </div>
  );
}

export default App;
