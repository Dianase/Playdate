import { useState, useEffect } from 'react'
import { ListGroupItem, Card, ListGroup } from 'react-bootstrap'
import '../styles/activity.css'

export default function Activity({activity}){
  const [image, setImage] = useState("Kidtennis.jpg")
  useEffect(() => {
    switch (activity.type) {
      case 'sports': setImage("kidstennis.jpg");
        break;
      case 'educational': setImage("teachingkids.png");
        break;
      case 'gaming': setImage("gaming.png");
        break;
      default: setImage("Xlogobg.png");
    }
  }, [activity])
  
 return (
  <div className="activity-card" >
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} alt="related to the type of activity"/>
  <Card.Body>
    <Card.Title>{activity.name}</Card.Title>
    <Card.Text>{activity.description}</Card.Text>
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


 )
}