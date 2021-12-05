import { useState } from 'react';
import './App.css';
import { Calender, MemoisedCalender } from './components/Calender';
import Factorial from './components/Factorial';
import Todo from './components/Todo';
function App() {



  return (
    <div className="App">
      {/* <MemoisedCalender date="02-12-21" memo={true}/>
      <Calender date="02-12-21" memo={false} />
     
<Factorial/> */}

      <Todo/>

    </div>
  );
}

export default App;
