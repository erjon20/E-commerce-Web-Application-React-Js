import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

const ConceptSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const concepts = [
    {
      name: 'Gold Jewlery',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos omnis odio harum fugiat hic et enim eos ea, ex amet earum rerum incidunt ipsam placeat voluptas doloribus commodi fuga.',
      image: '/images/download (2).jpg'
    },
    {
      name: 'Silver Jewlery',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nobis aliquid quaerat facilis itaque, tempora debitis maxime. Beatae, accusamus recusandae! Dolor libero cum sequi consequuntur sit esse temporibus similique voluptatum.',
      image: '/images/download (2).jpg'
    },
    {
      name: 'Platinum Jewlery',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis atque earum illum adipisci ullam dolores blanditiis at. Quibusdam eius perferendis tempora quo a perspiciatis provident. Eaque ex nisi molestiae.',
      image: '/images/download (2).jpg'
    }
  ];

  return (
    <Container>
      <Row>
        {concepts.map((concept, index) => (
          <Col key={index}>
            <Card className={`concept${index + 1} ${activeIndex === index ? 'active' : ''}`}>
              <Card.Img className="goldimage" src={concept.image} alt="image" fluid />
              <Card.Body>
                <Card.Title>{concept.name}</Card.Title>
                <Card.Text>
                  {concept.description}
                </Card.Text>
                <Button variant="primary" onClick={() => handleClick(index)}>Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const HeroSection = () => {
  return (
    <div className="hero">
      <Image className="firstimage" src="/images/goldfabric.png" alt="image" fluid />
      <Container>
        <Row>
          <Col>
            <div className="subHeadline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque magnam voluptatem sit dolor eius quibusdam explicabo esse totam! Possimus sequi officia veniam velit ipsa nesciunt consequatur nostrum nemo vitae!
           
