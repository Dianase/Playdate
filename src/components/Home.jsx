import {useNavigate} from 'react-router'
import FixedNav from "./FixedNav";
import Hero, {GetStarted, AboutUs } from "./Hero"
import { Button } from 'react-bootstrap'

export default function Home() {  
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/Login")
  }

  return (
    <>
      <header className="App-header">
        <FixedNav />
      </header>
      <Hero />
      <GetStarted />
      <AboutUs />
      <span className="xplore-btn" style={{display: 'flex', justifyContent: 'center'}}>
      <Button variant="info" size="lg" className="gs-btn" style={{borderRadius: "18px", padding: "12px", fontSize: "30px", }} onClick={goToSignup}>Let's Xplore</Button>
      </span>
    </>
  );
}
