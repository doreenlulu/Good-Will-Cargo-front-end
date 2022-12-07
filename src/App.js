import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-dom';
import './App.css';
import ship1 from "./assets/ship1.jpg"
<<<<<<< HEAD
=======
// import ship0 from "./assets/ship0.jpeg"
>>>>>>> 41d5ca768016b3a4c7a3061c405afdb7ca894cbd
import ship2 from "./assets/ship2.jpg"
import ship3 from "./assets/ship3.jpg"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Slider from './components/Slider';
import Register from './form/Register'; 
import {Route, Routes} from "react-router-dom";
=======
import Products from '/components/Products';
>>>>>>> 41d5ca768016b3a4c7a3061c405afdb7ca894cbd


function App() {
  
  return (
    <div className="App">
       <Navbar />
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
<<<<<<< HEAD
      <Routes>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
=======

      {/* <Products /> */}

    <Router>
        <Routes>
          <Route path = "/products" element={<Products />}></Route>
        </Routes>
    </Router>
    
>>>>>>> 41d5ca768016b3a4c7a3061c405afdb7ca894cbd
    </div>
  );
}

export default App;
