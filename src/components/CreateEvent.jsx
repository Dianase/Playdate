import { Form, Col, Button, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

export default function CreateEvent(){
  const [activity, setActivity] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [organizer, setOrganizer] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
    
    const event ={
      activity: activity,
      location: location,
      date: date,
      time: time,
      organizer: organizer,
      type: type,
      image: image,
    }

    fetch("http://localhost:5000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
      
      
    return (
      <Form style={{ margin: "200px", textAlign: "center" }}>
        <h2 style={{ padding: "70px" }}>Create an Activity</h2>
        <Row className="align-items-center">
        <Col xs={2} />
          <Col xs="auto" className="my-1">
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
              <option value="educational">Educational</option>
              <option value="sports">Sports/Outdoors</option>
              <option value="gaming">Gaming & Computers</option>
              <option value="other">Other</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={2} />
          <Col xs={8}>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4>Event Description</h4>
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
        <Col xs="auto" className="my-1">
          <Button type="submit">Create</Button>
        </Col>
      </Form>
    );

}
