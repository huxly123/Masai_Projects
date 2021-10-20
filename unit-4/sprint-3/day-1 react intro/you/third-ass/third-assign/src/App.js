import './App.css';
import List from './components/List';
import List1 from './components/List2';
function App() {
  return (<>
    <h2>Mobile Operating systems</h2>
    <ul>
<List/>
</ul>
<h2>Mobile Manufactures</h2>
<ul>
  <List1/>
</ul>
    </>
  )
}

export default App;
