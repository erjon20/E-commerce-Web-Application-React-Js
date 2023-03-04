import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import MDBFooter from './components/footer.js';
import About from './components/About.js';
import SingleProduct from './components/SingleProduct';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
function App() {

return(
    

 <>

<NavBar />
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/productlist' element={<ProductList/>} />
<Route path='/about' element={<About/>} />
<Route path='/productpage' element={<SingleProduct/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/Cart' element={<Cart/>}/>


</Routes>
<MDBFooter/>
</>
)

}


export default App;