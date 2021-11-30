import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Card, Spinner, Button } from 'react-bootstrap'
import '../styles/dash.css'
import { BsFillPlusCircleFill } from "react-icons/bs"
import { config } from "../config";


export default function MyPlaces() {
  const [favorites, setFavorites] = useState("");
  
  useEffect(() => {
    fetch(`${config.prodApiUrl}/favorites`)
      .then((response) => response.json())
      .then(setFavorites)
      .catch(alert);
  }, []);

 
  return (
    <div className="my-places" >
      <h1>Here are your Favorite Places</h1>
      <p>Add Places</p>
      <Link to="/Places"> <span className="add-btn"><BsFillPlusCircleFill size={70}/></span></Link>
      {!favorites ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {favorites.map((place) => (
            <div place={place} key={place.id} className="place-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={place.image} />
                <Card.Body>
                  <Card.Title>{place.name}</Card.Title>
                  <Card.Text>{place.hours}</Card.Text>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}