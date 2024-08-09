import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Port from "./components/Port";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 text-white min-h-screen">
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
      <Port />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
