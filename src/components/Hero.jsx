import 'bootstrap/dist/css/bootstrap.css'
import './hero.css'
import { Carousel } from 'react-bootstrap'

export default function Hero(){
  return(
  <div className="hero" >
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="splashingkids.jpg" 
      alt="woman and three children sitting with feet in pool splash kicking" 
    />
    <Carousel.Caption className="container">
      <h3>Outdoor Fun</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="facepaint.jpg"
      alt="blonde kid with raimbow color paint on face"
    />
    <Carousel.Caption className="container">
      <h3>Arts & Craft</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="jumpingkids.jpg"
      alt="kids jumping in a yellow bouncy house"
    />
    <Carousel.Caption className="container">
      <h3>Sports & Outdoors</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <img />
  </div>)
}