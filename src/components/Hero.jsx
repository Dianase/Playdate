import "bootstrap/dist/css/bootstrap.css";
import "../styles/hero.css";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <div>
      <Carousel className="hero" variant="dark" >
        <Carousel.Item>
          <img 
            className="d-block w-100 h-50"
            src="splashingkids.jpg"
            alt="woman and three children sitting with feet in pool splash kicking"
            />
          <Carousel.Caption >
            <h3>Outdoor Fun</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="threelittlegirls.jpg"
            alt="three young girls inside a teepee smiling and laughing"
          />
          <Carousel.Caption >
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
          <Carousel.Caption >
            <h3>Sports & Outdoors</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="unicorngirl.jpg"
            alt="little girl with pink dress holding a unicorn storybook"
          />
          <Carousel.Caption style={{alignItems:"center"}}>
            <h3>BookClub & Pretend Play</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="fingerpaint.jpg"
            alt="kid with colorful paint all over hands"
          />
          <Carousel.Caption >
            <h3>Skillshare & Workshops</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
