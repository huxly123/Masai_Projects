import { Join } from "./components/Join.jsx";
import { Contact } from "./components/Contact.jsx";
import { Download } from "./components/Download.jsx";
import { Help } from "./components/Help";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";

import "./App.css"
function App() {
  return (
    <div>
      <Join />
      <Settings />
      <Login />
      <Contact />
      <Help />
      <Download />
    </div>
  );
}

export default App;
