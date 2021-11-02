import { useState } from 'react';
import './App.css';
import { Button } from './components/Custom/Button';
function App() {
  const [theme,settheme]=useState(true)
  return (
    <div className="App">
<Button theme={theme}>Clickme</Button>
<button onClick={()=>{
  settheme(theme==="light" ? "dark" :"light")
}}>Toggle</button>
    </div>
  );
}

export default App;
