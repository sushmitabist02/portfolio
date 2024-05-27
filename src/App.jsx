
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Port from './components/Port';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  return (
      <div>
        <NavBar/>
        <Home/>
        <About/>
        <SocialLinks/>
        <Port/>
        <Experience/>
        <Contact/>
      </div>
  )
}

export default App
