import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'


export default function FixedNav(){
  return(
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand >
        <img src="logo.png" height="20px" />
        XPLORE
      </Navbar.Brand>

    </Navbar>
  )
}