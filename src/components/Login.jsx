import { initializeApp } from "firebase/app";
import {Form, Button} from 'react-bootstrap'

import firebaseConfig from "../credentials";
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

export default function Login(){
  
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
    .then((response) => {
      const credential = GoogleAuthProvider.credentialFromResult(response)
      const token = credential.accessToken;
      const user = response.user
    }).catch((error)=> {
     alert(error)
    })
  }
  return(
   
      <Form onSubmit={handleLogin} style={{margin: "350px"}} >
        <h2 style={{textAlign:"center", padding: "0px"}}>Login to Xplore</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <Button variant="primary" type="submit" style={{padding:"10px", margin:"25px"}} onSubmit={loginWithGoogle}>
                Login with Google</Button>
        <Button variant="secondary" type="submit" style={{padding:"10px", margin:"25px"}} onSubmit={handleLogin}>
                Submit</Button>
      </Form>
    
  )

}