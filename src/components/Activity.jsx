import { ListGroupItem, Card, ListGroup, Modal } from 'react-bootstrap'
import '../styles/activity.css'




export default function Activity({activity}){

 return (
   <Modal>
  <div className="activity-card" >
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={activity.image} alt="related to the type of activity"/>
  <Card.Body>
    <Card.Title>{activity.name}</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{activity.type}</ListGroupItem>
    <ListGroupItem>{activity.location}</ListGroupItem>
    <ListGroupItem>{new Date(activity.happening._seconds * 1000).toLocaleString()}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link >Join Activity</Card.Link>
  </Card.Body>
</Card>
</div>
</Modal>

 )
}