import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Pages/Home";
import Nav from "./components/Navigation/Nav";

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path = "/">
            <Nav/>
            <Home/>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
