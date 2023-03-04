import React from 'react';
import { Link } from "react-router-dom"
import { Navbar, Nav, Image, Container} from 'react-bootstrap';
import myImage from './images/logo.png';
import './css/Navbar.css';
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
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



const MenuItem = styled.div`
`;

function NavBar() {
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
            <Nav.Link href="/productlist">Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Sign In</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>

            <MenuItem>
            <Badge badgeContent={4} color="secondary">
            <Nav.Link href="/Cart"> <ShoppingBagOutlinedIcon /></Nav.Link>
            </Badge>
          </MenuItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
