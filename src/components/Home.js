import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css'
import myImage from './images/goldfabric2.png';
import gold from './images/gold.png';
import silver from './images/silver.png';
import { Container, Row, Col, Image, } from 'react-bootstrap';

const Home = () => {
  return (
    <>
<div className="container2">
  <Image className='firstimage' src={myImage} alt="image" fluid />
  <h1 className="title">Elegance</h1>
</div>
  <Container className='container'>
      <Row className='my-5 bg-color-1'>
        <Col xs={12} md={6} className='order-md-2'>
          <Image src={gold} className='img-fluid infoimage' alt='gold' />
        </Col>
        <Col xs={12} md={6} className='order-md-1 informationleft'>
          <h1 className='name'>Gold</h1>
          <p className='description'>Gold Jewelry is truly a symbol of luxury and elegance. Its rich, buttery hue is unmatched by any other metal, and exudes a sense of warmth and radiance that is truly mesmerizing. Gold has always been associated with wealth and prestige, and has been used throughout history to adorn the most powerful and influential people. Wearing gold jewelry is a way to make a statement, to show the world that you are someone who appreciates the finer things in life. Whether it is a simple gold chain or a grandiose gold necklace, gold jewelry is the perfect accessory for any occasion, and will always make you feel like a million dollars.</p>
          <button className='getInTouch' onClick>
      Shop Now
    </button> 
        </Col>
      </Row>
      <Row className='my-5 bg-color-1'>
        <Col xs={12} md={6}>
          <Image src={silver} className='img-fluid infoimage' alt='silver' />
        </Col>
        <Col xs={12} md={6} className='informationleft'>
          <h1 className='name'>Silver</h1>
          
          <p className='description'>Silver Jewelry, on the other hand, is a timeless classic that exudes a sense of elegance and refinement. Its cool, crisp tones add a touch of sophistication to any outfit, whether it be a formal occasion or a casual day out. Silver is also versatile and complements a wide range of skin tones, making it the perfect choice for anyone looking for a piece of jewelry that will stand the test of time. The way silver reflects light is truly mesmerizing, and it has the power to elevate any outfit to a whole new level. Silver Jewelry is perfect for anyone looking for a piece that is both elegant and timeless.</p>
          <button className='getInTouch'>Shop Now</button>
        </Col>
      </Row>
    </Container> 
        </>
  );
};
export default Home;
