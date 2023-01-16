import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Singleproduct from './Singleproduct';
import Cart from './Cart';
import Err from './Err';
import Nave from './component/Nave';




function App() {
  
return (
    <>
    <Nave/>
   
 <Router>
 
  <Routes>
  
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/singleproduct/:id' element={<Singleproduct/>} />
    <Route path='/err' element={<Err/>} />
  </Routes>
 </Router>

</>
  );
}

export default App;
