import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Gold from './components/Gold';
import Silver from './components/Silver';
import Platinum from './components/Platinum';
import MDBFooter from './components/footer.js';
import About from './components/About.js';
function App() {

return(
    

 <>

<NavBar />
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/gold' element={<Gold/>} />
<Route path='/silver' element={<Silver/>} />
<Route path='/platinum' element={<Platinum/>} />
<Route path='/about' element={<About/>} />

</Routes>
<MDBFooter/>
</>
)

}


export default App;