import { useEffect, useContext } from "react";
import { EventContext } from "../App";
import 'bootstrap/dist/css/bootstrap.css'
import { Spinner } from "react-bootstrap";

export default function Home(){
  const {events, setEvents} = useContext(EventContext)
  useEffect(()=>{
    fetch("https://dt-playdate-api.web.app")
    .then(response => response.json())
    .then(setEvents)
    .catch(alert)
  }, [])
  return (
    <div>
      {!events
       ? <Spinner animation="border" role="status">
       <span className="visually-hidden">Loading...</span>
         </Spinner>
       : <div>
        {events.map(activity => <Events key={activity.id} activity={activity}/>)}
         </div>}
    </div>
  )
}