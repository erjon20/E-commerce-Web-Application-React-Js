import Carousel from 'react-bootstrap/Carousel';
import myImage from './images/goldfabric.jpg';
import myImage1 from './images/hero1.jpg';
import myImage2 from './images/hero2.jpg';
import './css/carousel.css'
function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;