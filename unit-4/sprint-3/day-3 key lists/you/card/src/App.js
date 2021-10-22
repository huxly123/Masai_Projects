import logo from './logo.svg';
import './App.css';
import Datee from './components/Date';
import Mid from './components/Mid';
import Footerr from './components/Footer';

function App() {
  const color="grey"
  const styles={
    backgroundColor:color
  }
  return (<div id="app" style={styles}>
<Datee datee="20/10/2021" url="https://yt3.ggpht.com/ytc/AKedOLQR6CdQxBvU0Ye8hUpCyMc6HMwoMivl_vad_YmjZg=s900-c-k-c0x00ffffff-no-rj"/>
<Mid pay="Payt"/>
<Footerr footer="MacOs-Mobile"/>
</div>
  )
}

export default App;
