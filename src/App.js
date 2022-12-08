import React from "react"
// import ReactDOM from 'react-dom';
import './App.css';
// import ship1 from "./assets/ship1.jpg"
// import ship2 from "./assets/ship2.jpg"
// import ship3 from "./assets/ship3.jpg"
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Slider from './components/Slider';
// import Register from './form/Register'; 
// import {Route, Routes} from "react-router-dom";
import Products from "./components/Product";


function App() {
  
  return (
    <div className="App">
      <Products />
       {/* <Navbar /> */}
    
      {/* <Routes> */}
        {/* <Route path='/Register' element={<Register/>}/> */}
        {/* <Route path='/products' element={<Product/>}/> */}
        {/* <Route path='/' element= {
        <>
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
              </>
            }
          /> */}
      {/* </Routes> */}
      
    </div>
  );
}

export default App;
