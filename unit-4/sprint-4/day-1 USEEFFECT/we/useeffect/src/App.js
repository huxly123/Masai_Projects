import './App.css';
import {  useState } from 'react';
import Counter from './components/Counter';
import Db from './components/Db';
import Todo from './components/Todo';

function App() {






  const [show,setshow]=useState(true)
  



  return (
    <div className="App">
    <Db/>

   {
     show ? (
       <>
<Counter/>
<button onClick={()=>{
  setshow(false)
}}>Hide</button>
       </> ) : (
       <>
       <button onClick={()=>{
         setshow(true)
       }}>Show</button>
       </>
       )
     
}
<Todo/>
  
    </div>
  );
}

export default App;
