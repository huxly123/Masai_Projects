import './App.css';
import Butttton from './components/button';
import Contact_us from './components/Contact_us';
import Download from './components/Download';
import Help from './components/Help';
import Homee from './components/Home';
import Joinus from './components/Joinus';
import Loginn from './components/Login';
import Search from './components/Search';
import Settings from './components/Settings';

function App() {
  return(
    <div id="main-div">
    <h1>Part 1</h1>
    <div>
    <Joinus/>
    <Settings/>
    </div>
    <div><Loginn/>
    <Contact_us/>
    </div>
    <div>
      <Search/>
      <Help/>
    </div>
    <div>
      <Homee/>
      <Download/>
    </div>
    <h2>PART 2</h2>

    <div id="grid-div">
      <Butttton color="blue" name="JOIN US"/>
      <Butttton color="gray" name="SETTINGS"/>
      <Butttton color="yellow" name="LOGIN"/>
      <Butttton color="red" name="CONTACT US"/>
      <Butttton color="pink" name="HOME"/>
      <Butttton color="brown" name="DOWNLOAD"/>
    </div>
    </div>
  )
}

export default App;
