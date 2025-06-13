import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Pages/Home";
import Nav from "./components/Navigation/Nav";
import Portfolio from "./components/Pages/Portfolio";
import Experience from "./components/Pages/Experience";
import About from "./components/Pages/About";
import Gallery from "./components/Pages/Gallery";


function App() {
  return (
    <div className="App">
     <Router>
      <Nav>
      <Switch>

        <Route exact path = "/">
            <Home/>
        </Route>

        <Route exact path = "/Experience">
            <Experience/>
        </Route>

        <Route exact path = "/Portfolio">
            <Portfolio/>
        </Route>

        <Route exact path = "/About">
            <About/>
        </Route>
        
        <Route exact path = "/Gallery">
            <Gallery/>
        </Route>

      </Switch>
      </Nav>
     </Router>
    </div>
  );
}

export default App;
