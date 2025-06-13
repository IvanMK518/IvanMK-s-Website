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
     
      <Switch>

        <Route exact path = "/">
        <Nav/>
            <Home/>
        </Route>

        <Route exact path = "/Experience">
        <Nav/>
            <Experience/>
        </Route>

        <Route exact path = "/Portfolio">
        <Nav/>
            <Portfolio/>
        </Route>

        <Route exact path = "/About">
        <Nav/>
            <About/>
        </Route>
        
        <Route exact path = "/Gallery">
        <Nav/>
            <Gallery/>
        </Route>

      </Switch>
     </Router>
    </div>
  );
}

export default App;
