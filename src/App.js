import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop.js';


function App() {

return(
    

 <>

<NavBar />
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Shop/>} />
</Routes>
</>
)

}


export default App;