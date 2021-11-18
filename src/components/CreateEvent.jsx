import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default function CreateEvent(){
   
    // event.preventDefault
    // const data ={
    //   name:
    //   location:
    //   happening:
    //   organizer:
    //   organizerFullname:
    //   type:
    // }
    return (
      
      <Form style={{margin: "300px", textAlign:"center"}}>
        <h1 style={{padding:"70px"}}>Create an Activity</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><h4>Event Name</h4></Form.Label>
          <Form.Control type="text" placeholder='"Call of Duty meetup"' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><h4>Where?</h4></Form.Label>
          <Form.Control type="text" placeholder='"Online"' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><h4>When?</h4></Form.Label>
          <Form.Control type="text" placeholder='"8:00PM"' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><h4>Event Description</h4></Form.Label>
          <Form.Control rows={3} as="textarea" placeholder='"Share all your tips and tricks"' />
        </Form.Group>
      </Form>
    )

  }
