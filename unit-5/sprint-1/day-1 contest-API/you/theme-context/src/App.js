import { useContext } from 'react';
import './App.css';
import { Themecontext } from './Context/ThemeContext';
import {Div} from "./Custom/Div"


function App() {

const {theme,handleTheme}=useContext(Themecontext)

  return (
    <div className="App">
      <Div theme={theme}>
        <button onClick={() => {
          handleTheme("dark")
        }}>Dark</button>
        <button onClick={() => {
          handleTheme("light")
        }}>Light</button>
     </Div>
      

    </div>
  );
}

export default App;
