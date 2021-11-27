
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Button} from 'react-bootstrap'
import '../styles/fixednav.css'
import { useNavigate } from 'react-router'

export default function FixedNav(){
  let navigate = useNavigate()
  // const goToEvents = () => {
  //   navigate("/Events")
  // }
  // const goToPlaces = () => {
  //   navigate("/Places")
  //}
  const goToSignup = () => {
    navigate("/Signup")
  }

  return (
      <Navbar bg="azure" variant="dark" fixed="top" className="navbar" >
        <Navbar.Brand >
          <img src="xlogobg.png" className="nav-logo" alt="Xplore logo a map with red X marks the spot"  />
        </Navbar.Brand>
        {/* <Button variant="light" className="nav-btn" onClick={goToEvents}>Xplore Activities</Button>
        <Button variant="light" className="nav-btn" onClick={goToPlaces}>Xplore Places</Button> */}
        <Button variant="light"  className="nav-btn" onClick={goToSignup}>Create or Join an Event</Button>
      </Navbar>
  
  )
}