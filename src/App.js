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
import Mobuile from './Mobuile';


function App() {
  
return (
    <>
    <Nave/>
   
  <butto clasName="btn" >

  </butto>
 <Router>
 
  <Routes>
  
    <Route path='/' element={<Home />} />
    <Route path='./Mobuile.js' element={<Mobuile />}/>
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/Singleproduct' element={<Singleproduct/>}
    />
    <Route path='/err' element={<Err/>} />
  </Routes>
 </Router>

</>
  );
}

export default App;
