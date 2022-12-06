import './App.css';
import ship1 from "./assets/ship1.jpg"
import ship0 from "./assets/ship0.jpeg"
import ship2 from "./assets/ship2.jpg"
import ship3 from "./assets/ship3.jpg"
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <Hero imageSrc={ship1} />
      
    </div>
  );
}

export default App;
