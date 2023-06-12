import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarSection from './components/NavbarSection';
import Home from "./pages/Home";
import Footer from './components/Footer';
// import About from "./pages/About";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Router>
         <NavbarSection/>
         
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>

            {/* <Route path="/Services" exact component={<Services/>}></Route>
            <Route path="/About us" component={<About/>}></Route>
            <Route  path="/Contact us" component={<Contact/>}></Route>
            <Route path="/Careers" component={<Careers/>}></Route> */}
          </Routes>
          <Footer/>
       </Router>
       
    </div>
  );
}

export default App;
