
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './Pages/CardsDetails';
import Cards from './Pages/Cards';
import {Routes,Route} from "react-router-dom";
import Footer from './components/Footer';
import Slider from './components/Slider';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Buy from './Pages/Buy';


function App() {
  return (
  <>
   <Routes>
   <Route path='/' element={<Header />} />
   </Routes>
   <Routes>
   <Route path='/' element={<Slider />} />
   </Routes>
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/buy'element={<Buy/>}/> 
   </Routes>
   <Routes>
   <Route path='/' element={<Footer />} />
   </Routes>
  
  </>
  );
}

export default App;