import registration from "./components/registration";
import {Home} from "./components/Home";
import {Adduser} from "./components/Adduser";
import {EditUser} from "./components/EditUser";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Router>
            <Route exact path="/Home" component={Home} />
            <Route path="/add" component={Adduser} />
            <Route path="/edit/:id" component={EditUser} />
        </Router>
    </div>
  );
}

export default App;
