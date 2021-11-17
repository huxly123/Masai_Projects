import { useContext, useState } from 'react';
import './App.css';
import First from './components/First';
 import {Authcontext} from "./Context/Authcontext"

function App() {

  const [age]=useState(10)
  
  const { token, handletoChange } = useContext(Authcontext);
  
  if (!token) {
    return (
      <>
        <h1>provide token</h1>
        <input type="text"></input>
        <input type="password"></input>
        <button onClick={() => {
          handletoChange("QpwL5tke4Pnpja7X4");
        }}>Submit</button>
      </>
    );
  }
  return (
    <div className="App">
      hello ,your age is:{age}
   <First/>
    </div>
  );
  
}

export default App;
