import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-dom';
import './App.css';
import ship1 from "./assets/ship1.jpg"
// import ship0 from "./assets/ship0.jpeg"
import ship2 from "./assets/ship2.jpg"
import ship3 from "./assets/ship3.jpg"
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Products from '/components/Products';


function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "https://isirmalak.atlassian.net/jira/software/projects/GWC/boards/2", title: "Log In" },
  ];
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={ship1} />
      <Slider
        imageSrc={ship2}
        title={"Dependable Shipping."}
        subtitle={
          "At Good Will Cargo, we offer tailored alternatives for the movement…"
        }
      />
      <Slider
        imageSrc={ship3}
        title={"Fast Shipping."}
        subtitle={"Good Will Cargo delivers fast, safe and sound sea cargo solutions.."}
        flipped={true}
      />

      {/* <Products /> */}

    <Router>
        <Routes>
          <Route path = "/products" element={<Products />}></Route>
        </Routes>
    </Router>
    
    </div>
  );
}

export default App;
