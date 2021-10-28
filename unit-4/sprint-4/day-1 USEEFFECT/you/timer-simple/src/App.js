// import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer initialtime={0} finaltime={5}/>
     
    </div>
  );
}

export default App;
