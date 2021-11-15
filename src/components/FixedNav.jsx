import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Dropdown } from 'react-bootstrap'


export default function FixedNav(){
  return(
    <Navbar bg="dark" variant="dark" fixed="top" style={{display:"flex"}}>
      <Navbar.Brand >
        <img src="xlogo.png" alt="Xplore logo a map with red X marks the spot" height="80px" style={{padding:"5px 15px 0px 0px" }} />
      </Navbar.Brand>
      <Dropdown style={{padding:"15px" }} >
        <Dropdown.Toggle variant="info" id="dropdown-basic">
        Xplore Events
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Events">Educational Activities</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sports & Outdoors</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Gaming & Computer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{padding:"15px" }} >
        <Dropdown.Toggle variant="info" id="dropdown-basic">
        Xplore Places
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Park & Playgrounds</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Museums & Something</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Nature Centers & Sumelse</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  )
}