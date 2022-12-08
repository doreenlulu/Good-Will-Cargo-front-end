import React from "react"
import ReactDOM from 'react-dom';
import './App.css';
import ship1 from "./assets/ship1.jpg"
<<<<<<< HEAD
import ship0 from "./assets/ship0.jpeg"
=======
>>>>>>> 3649968cee2245e2b5bcd9afb25d8d57a1e35366
import ship2 from "./assets/ship2.jpg"
import ship3 from "./assets/ship3.jpg"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
<<<<<<< HEAD
import Navbar from './components/Navbar';
=======
import Register from './form/Register'; 
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product";
>>>>>>> 3649968cee2245e2b5bcd9afb25d8d57a1e35366


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
=======
    
      <Routes>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Product' element={<Product/>}/>
      </Routes>
      
>>>>>>> 3649968cee2245e2b5bcd9afb25d8d57a1e35366
    </div>
  );
}

export default App;
