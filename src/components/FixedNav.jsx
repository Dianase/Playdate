
import 'bootstrap/dist/css/bootstrap.css'

import { Navbar, Button } from 'react-bootstrap'
import '../styles/fixednav.css'

export default function FixedNav(){


  return (
      <Navbar bg="azure" variant="dark" sticky="top" className="navbar" >
        <Navbar.Brand >
          <img src="Xlogobg.png" className="nav-logo" alt="Xplore logo a map with red X marks the spot"  />
        </Navbar.Brand>
        {/* <Button variant="light"  className="nav-btn" >Create or Join an Event</Button> */}
        <Button variant="outline-danger" size="lg" className="gs-btn" ><a style={{textDecoration: "none", color: "black", fontSize: "27px", alignSelf: "flex-end"}} href="#getStarted">Get Started</a></Button>
      </Navbar>
  
  )
}