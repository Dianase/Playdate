import "bootstrap/dist/css/bootstrap.css";
import "../styles/hero.css";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <div>
      <Carousel className="hero" variant="dark">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="threelittlegirls.jpg"
            alt="three young girls inside a teepee smiling and laughing"
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Create & Host activities.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 h-50"
            src="splashingkids.jpg"
            alt="woman and three children sitting with feet in pool splash kicking"
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Join Activities.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="kidslittlefingers.jpg"
            alt="kids jumping in a yellow bouncy house"
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Find Places to Xplore.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="kidactivist.png"
            alt="kids holding up signs reads save the planet"
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Get Involved.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            src="fingerpaint.jpg"
            alt="kid with colorful paint all over hands"
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Host Skillshares & Workshops</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="info">
        <h1>Here is some details about the app</h1>
        
      </div>
      <div className="info">
        <h1>Here is some details about the app</h1>
      </div>
    </div>
  );
}
