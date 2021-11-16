import 'bootstrap/dist/css/bootstrap.css'
import { useContext } from 'react'
import { ListGroupItem, Card, ListGroup } from 'react-bootstrap'
import { EventContext } from '../App'


export default function Events({activity}){
  const {setSelectedEvent} = useContext(EventContext)
  const handleClick = (e) =>{
    e.preventDefault()
    setSelectedEvent(activity.id)
  }
  return (
  
    <div><h1>Xplore Events & Activities:</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="teachingkids.png" alt="curly-haired young woman teaching diverse group of children"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Educational</ListGroupItem>
        <ListGroupItem>Broken Sound, Boca Raton</ListGroupItem>
        <ListGroupItem>11:00pm</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Join Activity</Card.Link>
        <Card.Link href="#">More Info</Card.Link>
      </Card.Body>
    </Card>
  </div>
  )