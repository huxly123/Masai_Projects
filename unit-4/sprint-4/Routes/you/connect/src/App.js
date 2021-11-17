import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
<Route path="/">
//home
</Route>

<Route path="/notes">
  //notes
</Route>

<Route path="/create">
  //create
</Route>
</Switch>
    </Router>
    </>
  );
}

export default App;
