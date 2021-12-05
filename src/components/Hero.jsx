import "bootstrap/dist/css/bootstrap.css";
import { ListGroupItem, Card, ListGroup, Carousel } from "react-bootstrap";
import "../styles/hero.css";

export const GetStarted = () => {
  return (
    <div id="getStarted">
      <div className="info-1">
        <span className="text">Join or Host Activities</span>
        <Card style={{ width: "18rem" }} className="place-card">
          <Card.Img
            variant="top"
            src="soccer.jpg"
            alt="related to the type of activity"
          />
          <Card.Body>
            <Card.Title>Sports</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Patch Reef Park</ListGroupItem>
            <ListGroupItem>8:00AM</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};
export const AboutUs = () => {
  return (
    <div className="info-2">
      <Card style={{ width: "18rem" }} className="place-card">
        <Card.Img variant="top" src="gumbolimbo.jpg" />
        <Card.Body>
          <Card.Title>Gumbo Limbo</Card.Title>
          <Card.Text>Boca Raton</Card.Text>
        </Card.Body>
      </Card>
      <span className="text">Xplore your favorite Places nearby</span>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="container">
      <Carousel className="hero" variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="threelittlegirls.jpg"
            alt="three young girls inside a teepee smiling and laughing"
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="fingerpaint.jpg"
            alt="kid with colorful paint all over hands"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="kidactivist.png"
            alt="kids holding up signs reads save the planet"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
