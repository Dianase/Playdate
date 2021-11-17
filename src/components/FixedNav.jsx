import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FixedNav(){
  return(
      <Navbar bg="dark" variant="dark" fixed="top" >
        <Navbar.Brand >
          <img src="xlogo.png" alt="Xplore logo a map with red X marks the spot" height="90px" style={{paddingLeft: "25px"}} />
        </Navbar.Brand>
        <Dropdown role="menu" style={{padding:"25px", marginLeft:"500px"}} className="dropdown">
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Xplore Events
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item role="menuitem">Educational Activities</Dropdown.Item>
            <Dropdown.Item role="menuitem"> Sports & Outdoors</Dropdown.Item>
            <Dropdown.Item role="menuitem">Gaming & Computer</Dropdown.Item>
            <Dropdown.Item role="menuitem"><Link to="/Events">All Activities</Link></Dropdown.Item>
            <Dropdown.Item role="menuitem"><Link to="/Events">Create Activity</Link></Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <Dropdown role="menu" style={{padding:"15px" }} className="dropdown">
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Xplore Places
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item role="menuitem">Park & Playgrounds</Dropdown.Item>
            <Dropdown.Item role="menuitem">Museums & Something</Dropdown.Item>
            <Dropdown.Item role="menuitem">Nature Centers & Sumelse</Dropdown.Item>
            <Dropdown.Item role="menuitem"><Link to="/Places">All Places</Link></Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
          <Dropdown style={{marginLeft: "150px"}} role="menu">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
          Sign In
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item role="menuitem"><Link to="/Login">Login</Link></Dropdown.Item>
            <Dropdown.Item role="menuitem"><Link to="/Signup">Signup</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Navbar>
  
  )
}