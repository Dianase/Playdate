import { useState } from "react";
import { ListGroupItem, Card, ListGroup, Button, Modal } from "react-bootstrap";
import "../styles/activity.css";

export default function Activity({ activity }) {
  // const [image, setImage] = useState(" ")
  // useEffect(() => {
  //   switch (activity.type) {
  //     case 'sports': setImage("kidstennis.jpg");
  //       break;
  //     case 'educational': setImage("teachingkids.png");
  //       break;
  //     case 'gaming': setImage("gaming.png");
  //       break;
  //     default: setImage("Xlogobg.png");
  //   }
  // }, [activity])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="activity-card">
        <div>
          {" "}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>You Joined {activity.name}!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you've joined this Activity!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={activity.image}
            alt="related to the type of activity"
          />
          <Card.Body>
            <Card.Title>{activity.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{activity.location}</ListGroupItem>
            <ListGroupItem>
              {new Date(activity.happening._seconds * 1000).toLocaleString()}
            </ListGroupItem>
            <ListGroupItem>{activity.type}</ListGroupItem>
            <Card.Text>{activity.description}</Card.Text>
          </ListGroup>
          <Card.Body>
            <Button variant="info" onClick={handleShow}>
              Join Activity
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
