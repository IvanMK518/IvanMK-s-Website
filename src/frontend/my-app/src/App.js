import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Home from "./components/Pages/Home";
import Experience from "./components/Pages/Experience";
import Portfolio from "./components/Pages/Portfolio";
import About from "./components/Pages/About";
import Gallery from "./components/Pages/Gallery";

function App() {
  return (
    <Router>
      <Nav/>                   
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Experience" element={<Experience/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Gallery" element={<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
