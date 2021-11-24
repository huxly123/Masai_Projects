import { useState } from 'react';
import './App.css';
import { incCount,decCount } from './Redux/action';
import { Appcontext } from './Redux/AppcontextProvider';

function App() {

  const { dispatch, getstate } = useState(Appcontext);

  const { counter } = getstate();

  const handleAdd = () => {
    dispatch(incCount(1))
  }

    const handleReduce = () => {
      dispatch(decCount(1));
    };

  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

export default App;
