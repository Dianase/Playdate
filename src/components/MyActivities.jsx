import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { Spinner } from "react-bootstrap";
import Activity from "./Activity"
import { config } from "../config";

import "../styles/dash.css";
import { BsFillPlusCircleFill } from 'react-icons/bs'

export default function MyActivities() {

  const jwt_token = localStorage.getItem("jwt");
  // Make all api call with jwt token in header
  // fetch(`dashboad_url`, { headers: {Authorization: jwt_token}}

  const [activities, setActivities] = useState("");
  
  useEffect(() => {
    fetch(`${config.prodApiUrl}/myactivities`)
      .then((response) => response.json())
      .then(setActivities)
      .catch(alert);
  }, []);

  return (
    <>
      <div className="my-activities" >
        <h1>Here are your scheduled activities</h1>
        <p>Create an Activity</p>
       <Link to="/CreateEvent"> <span className="add-btn"><BsFillPlusCircleFill size={70}/></span></Link>
      <div>{!activities ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div>
            {activities.map((activity) => (
              <Activity activity={activity} key={activity.id} />
            ))}
          </div>
        )}</div>
      </div>
      
      
    </>
  );
}
