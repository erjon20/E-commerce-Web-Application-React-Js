import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Footer = () => (
  <Navbar bg="dark" variant="dark" fixed="bottom">
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Nav className="justify-content-center">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-center text-white">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Nav className="justify-content-center">
            <Nav.Link href="#">Privacy Policy</Nav.Link>
            <Nav.Link href="#">Terms of Use</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default Footer;
