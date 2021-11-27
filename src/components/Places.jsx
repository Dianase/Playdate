import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import PlaceCard from "./PlaceCard"
import { Spinner, Button } from "react-bootstrap"


export default function Places(){
  const [places, setPlaces] = useState('')
  let navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost:5000/Places")
    .then(response => response.json()) 
    .then(setPlaces)
    .catch(alert)
  }, [])

  const goBack = () =>{
    navigate("/Dashboard")
  }  
  return (
    <div className="places-page" >
      <span className="back-btn"><Button onClick={goBack}>Back</Button></span>
      <span>
          <img
            src="Xlogobg.png"
            alt="Xplore logo with red X"
            style={{ height: "120px" }}
          />
        </span>
      {!places
       ? <Spinner animation="border" role="status">
       <span className="visually-hidden">Loading...</span>
         </Spinner>
       : <div >
         <h1 style={{padding: "40px"}}>Xplore Places Near You</h1>
        {places.map(place => <PlaceCard place={place} key={place.id}/>)}
         </div>}
    </div>
    
  )}
//fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=park+in+${zipcode}&key=${myApiKey}")