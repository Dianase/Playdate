import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";
import { Spinner, Button, Card, Modal } from "react-bootstrap";
import { config } from "../config";
import "../styles/places.css";

export default function Places({ place }) {
  const [places, setPlaces] = useState("");
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${config.prodApiUrl}/Places`)
      .then((response) => response.json())
      .then(setPlaces)
      .catch(alert);
  }, []);

  const handleFavorite = (thisPlace) => {
    console.log({ user })
    fetch(`${config.prodApiUrl}/favorites`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  user?.accessToken
      },
      body: JSON.stringify(thisPlace),
    })
    .then(() => handleShow())
    .catch(alert)
  };

  const goBack = () => {
    navigate("/Profile");
  };

  return (
    <div className="places-page">
      <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>You added {place?.name} to your Favorites!</Modal.Title>
            </Modal.Header>
           
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
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
          {places.map((place) => {
            const thisPlace = place;
            return(
              <div place={place} key={place.id} className="place-card">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={place.image} />
                  <Card.Body>
                    <Card.Title>{place.name}</Card.Title>
                    <Card.Text>{place.hours}</Card.Text>
                    <Button variant="danger" onClick={() => handleFavorite(thisPlace)}>Add to Favorites</Button>
                  </Card.Body>
                </Card>
              </div>
            )
            })}
        </div>
      )}
    </div>
  );
}
//fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=park+in+${zipcode}&key=${myApiKey}")
