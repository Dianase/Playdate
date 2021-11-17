import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'
import { Spinner } from "react-bootstrap";
import Activity from './Activity';




export default function Events(){
  const [events, setEvents] = useState('')

  useEffect(() => {
    fetch("http://localhost:5000/events")
    .then(response => response.json()) 
    .then(setEvents)
    .catch(alert)
  }, [])
  
  return (
    <div style={{backgroundColor: "#dfecf8", textAlign: "center", padding: "50px"}}>
      {!events
       ? <Spinner animation="border" role="status">
       <span className="visually-hidden">Loading...</span>
         </Spinner>
       : <div >
         <h1 >Xplore Events & Activities:</h1>
        {events.map(activity => <Activity activity={activity} key={activity.id}/>)}
         </div>}
    </div>
    
  )}