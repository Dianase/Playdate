import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";
import { Form, Col, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import '../styles/events.css'

export default function CreateEvent() {
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);
  let navigate = useNavigate()

  const newEvent = (e) =>{
    e.preventDefault()

    const event = {
      name: activity,
      location: location,
      date: date,
      time: time,
      organizer: organizer,
      type: type,
    };
    fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  user?.accessToken
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/Events")
      })
      .catch((err) => console.log(err));
  }
  
  const goBack = () =>{
    navigate("/Profile")
  }

  return (
    <>
    <span className="back-btn"><Button style={{margin:"20px"}} onClick={goBack}>Back</Button></span>
    <div className="create-event" >
    <Form onSubmit={(e)=>{e.preventDefault()} } className="create-form">
      <img src="Xlogobg.png" alt="app logo with word xplore" style={{height:"110px"}}/>
      <h2 style={{ padding: "50px" }}>Create an Activity</h2>
    
      <Row className="align-items-center">
        <Col xs={1} />
        <Col xs={9}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4>Event Name</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder='"Call of Duty meetup"'
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4>Where?</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder='"Online"'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4>Date</h4>
            </Form.Label>
            <Form.Control
              type="date"
              placeholder='"8:00PM"'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4>Time</h4>
            </Form.Label>
            <Form.Control
              type="time"
              placeholder='"8:00PM"'
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4>Organizer</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder='"Tim Evans"'
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
            />
          </Form.Group>
          
          <Form.Label
            className="me-sm-2"
            htmlFor="inlineFormCustomSelect"
            placeholder="Choose event type"
          >
            <h4>Event type</h4>
          </Form.Label>
          <Form.Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="me-sm-2"
            id="inlineFormCustomSelect"
          >
            <option value="other">Select Type</option>
            <option value="educational">Educational</option>
            <option value="sports">Sports/Outdoors</option>
            <option value="gaming">Gaming & Computers</option>
            <option value="other">Other</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4 style={{padding:"10px"}}>Event Description</h4>
            </Form.Label>
            <Form.Control
              rows={3}
              as="textarea"
              placeholder='"Share all your tips and tricks"'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2} />
      </Row>
      
      <Col xs={2} className="my-1">
        <Button type="submit" onClick={newEvent}>Create</Button>
      </Col>
    </Form>
    </div>
    </>
  );
}
