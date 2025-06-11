import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Pages/Home";
import Nav from "./components/Navigation/Nav";
import Portfolio from "./components/Pages/Portfolio";

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>

        <Route exact path = "/">
            <Nav/>
            <Home/>
        </Route>

        <Route exact path = "/About">
            <Nav/>
            <About/>
        <Route/>

        <Route exact path = "/Portfolio"></Route>
            <Nav/>
            <Portfolio/>
        </Route>

      </Switch>
     </Router>
    </div>
  );
}

export default App;
