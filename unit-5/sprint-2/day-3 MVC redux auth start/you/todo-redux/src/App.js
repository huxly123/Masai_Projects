import { Route ,Switch} from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import Tododetail from './components/Tododetail';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact>
      <Todo/>
        </Route>
        
        <Route path="/todo/:id" exact>
          <Tododetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
