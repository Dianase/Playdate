import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.css'
import {Form, Button, Row} from 'react-bootstrap'
import {  useState } from "react";

import firebaseConfig from "../credentials";



import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

export default function Login(){
  const [user, setUser] = useState()
 
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  const handleLogin = (values) =>{
    const {email, password} = values
    signInWithEmailAndPassword(auth, email, password)
  }
  const loginWithGoogle =(e)=>{
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then(response => {
    setUser(response.user)
    })
  }
  return(
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{padding:"10px"}} onSubmit={loginWithGoogle}>
                Login with Google</Button>
        <Button variant="primary" type="submit" style={{padding:"10px"}} onSubmit={handleLogin}>
                Submit</Button>
      </Form>
    </div>
  )

}