import "bootstrap/dist/css/bootstrap.css";
import "../styles/events.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Spinner, Button } from "react-bootstrap";
import Activity from "./Activity";

export default function Events() {
  const [events, setEvents] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://dt-playdate-api.web.app/events")
      .then((response) => response.json())
      .then(setEvents)
      .catch(alert);
  }, []);

  const goBack = () => {
    navigate("/Profile");
  };
  return (
    <>
      <span className="back-btn">
        <Button style={{ margin: "20px" }} onClick={goBack}>
          Back
        </Button>
      </span>
      <div className="events-page">
        <span>
          <img
            src="Xlogobg.png"
            alt="Xplore logo with red X"
            style={{ height: "120px" }}
          />
          <h2 style={{ padding: "30px" }}>Xplore Activities Near You</h2>
        </span>
        {!events ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div>
            {events.map((activity) => (
              <Activity activity={activity} key={activity.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
