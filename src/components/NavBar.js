import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import myImage from './images/logo.png';
import './css/Navbar.css';



const NavBar = () => {

  return (
    <div className='navbar-container'>
    <Navbar bg="transparent" className="nav">
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  hidden={{ s: true, lg: false }} >
        <Nav>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="/shop" >Shop</Nav.Link>
        </Nav>
        <Navbar.Brand className="image" href="" >
        <Image src={ myImage} alt="logo"  width="50" height="50" />
      </Navbar.Brand>

          <Nav >
          <Nav.Link href="#About" >About us</Nav.Link>
          <Nav.Link href="Cart" >Cart</Nav.Link>
        </Nav>
          </Navbar.Collapse>

    </Navbar>
    </div>
  );
}

export default NavBar;
