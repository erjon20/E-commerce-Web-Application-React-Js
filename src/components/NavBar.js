import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown, Image, Container} from 'react-bootstrap';
import myImage from './images/logo.png';
import './css/Navbar.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


// const NavBar = () => {

//   return (
//     <div className='navbar-container'>
//     <Navbar bg="transparent" className="nav">
    
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse  hidden={{ s: true, lg: false }} >
//         <Nav>
//           <Nav.Link><Link to="/">Home</Link></Nav.Link>
//           <Nav.Link href="/shop" >Shop</Nav.Link>
//         </Nav>
//         <Navbar.Brand className="image" href="" >
//         <Image src={ myImage} alt="logo"  width="50" height="50" />
//       </Navbar.Brand>

//           <Nav >
//           <Nav.Link href="#About" >About us</Nav.Link>
//           <Nav.Link href="Cart" >Cart</Nav.Link>
//         </Nav>
//           </Navbar.Collapse>

//     </Navbar>
//     </div>
//   );
// }

// export default NavBar;





function NavBar() {
  const [isAdminSignedIn, setIsAdminSignedIn] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
        <Link to="/"><Image src={ myImage} alt="logo"  width="70" height="70" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home </Nav.Link>
          <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/gold">Gold</NavDropdown.Item>
              <NavDropdown.Item href="/Silver">
               Silver
              </NavDropdown.Item>
              <NavDropdown.Item href="/platinum">Platinum</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/Cart"> Cart <MDBIcon icon="shopping-bag" className="me-2" /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
