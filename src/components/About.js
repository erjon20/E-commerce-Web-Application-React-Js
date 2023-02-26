import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image from './images/Platinum.jpg';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
      <Col md={6}>
          <p>
          Welcome to Stay Golden, a jewelry website where you can find unique and high-quality jewelry pieces that will add a touch of elegance and sophistication to your style. At Stay Golden, we believe that jewelry is more than just an accessory - it is an expression of your personality, your style, and your individuality.

Our story began with a simple idea: to create jewelry that is both beautiful and meaningful. We wanted to offer a collection of pieces that are not only aesthetically pleasing, but also have a story to tell. We wanted our jewelry to be a reflection of the wearer's personality and a symbol of their unique journey.

Our team of skilled artisans and designers work tirelessly to bring you a collection of jewelry that is both unique and versatile. Each piece is crafted with the utmost care and attention to detail, using only the finest materials. We source our materials from trusted suppliers, ensuring that our jewelry is of the highest quality.

At Stay Golden, we are committed to providing exceptional customer service. We want to make sure that every customer has a positive experience when shopping with us. Our team is always available to answer any questions and help you find the perfect piece of jewelry. We also offer free shipping on all orders and a hassle-free return policy, so you can shop with confidence.

We believe in giving back to the community and are proud to support various charitable organizations. A portion of every sale is donated to a charity of our choice, so you can feel good about your purchase.

Thank you for choosing Stay Golden for your jewelry needs. We hope you enjoy our collection as much as we enjoyed creating it. If you have any questions or feedback, please don't hesitate to reach out to us. We look forward to hearing from you!
          </p>
        </Col>
        <Col md={6}>
          <Image src={image} alt="example" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default About;