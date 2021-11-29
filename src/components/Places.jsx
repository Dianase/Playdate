import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Spinner, Button, Card } from "react-bootstrap";
import "../styles/places.css";

export default function Places() {
  const [places, setPlaces] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/Places")
      .then((response) => response.json())
      .then(setPlaces)
      .catch(alert);
  }, []);

  const goBack = () => {
    navigate("/Profile");
  };
  return (
    <div className="places-page">
      <span className="back-btn">
        <Button onClick={goBack}>Back</Button>
      </span>
      <span className="img-logo">
        <img
          src="Xlogobg.png"
          alt="Xplore logo with red X"
          style={{height: "120px"}}
        />
      </span>
      {!places ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <h1 >Xplore Places Near You</h1>
          {places.map((place) => (
            <div place={place} key={place.id} className="place-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={place.image} />
                <Card.Body>
                  <Card.Title>{place.name}</Card.Title>
                  <Card.Text>{place.hours}</Card.Text>
                  <Button variant="danger">Add to Favorites</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
//fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=park+in+${zipcode}&key=${myApiKey}")
