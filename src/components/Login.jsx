import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import {Form, Button} from 'react-bootstrap'
import '../styles/login.css'
import { UserContext } from "../App";
import firebaseConfig from "../credentials";
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

export default function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {setUser, setIsLoggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  const afterLogin = async (creds) => {
    const jwt = await creds.user.getIdToken()
    localStorage.setItem('jwt', jwt);
    setUser(creds.user)
    setIsLoggedIn(true)
    navigate("/Profile");
    
  }

  const handleLogin = async (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(afterLogin)
      .catch(alert)
  }
  const loginWithGoogle = (e) =>{
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(afterLogin)
      .catch(alert)
  }
  return(
    <div className="login-form">
      <Form onSubmit={handleLogin} >
        <img src="Xlogobg.png" alt="app logo with word xplore" style={{height:"120px"}}/>
        <h2 style={{textAlign:"center", padding: "20px"}}>Login to Xplore</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{padding:"10px", margin:"25px"}}>
                Submit</Button>
        <Button variant="secondary" style={{padding:"10px", margin:"25px"}} onClick={loginWithGoogle}>
                Login with Google</Button>
      </Form>
      </div>
  )

}