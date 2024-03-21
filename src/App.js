import "./App.css"
import React from "react";
import Side from "./Components/sidebar/Side";
import Home from "./Components/home/Home";
import Services from "./Components/services/Services";
import About from "./Components/about/About";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Formation from "./Components/formation/Formation";
import Wordpress_site from './Components/Wordpress_site';
import Laravel_site from './Components/Laravel_site';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
        
      <Side/>
      <main className="main">
        <Home/>
        <About/>
        <Services/>
        <Formation/>
        <Portfolio/>
        <Routes>
        
        <Route   path='/Wordpress_site' element={<Wordpress_site/>}  />
        <Route   path='/Laravel_site' element={<Laravel_site/>}  />

        </Routes>
        <Contact/>
        

      </main>
    </div>
    </>
  );
}

export default App;
