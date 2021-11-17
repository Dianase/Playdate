import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.css'
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCaZ7D3HnviQUxrW8tP9ikzn0DqyfbcXPY",
  authDomain: "dt-playdate-api.firebaseapp.com",
  projectId: "dt-playdate-api",
  storageBucket: "dt-playdate-api.appspot.com",
  messagingSenderId: "1079221441677",
  appId: "1:1079221441677:web:93191ce9ba67d3ee743ec4"
};


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
    .then(response => {
    setUser(response.user)
    })
  }
  return(
    <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="primary" type="submit" onSubmit={loginWithGoogle}>
    Login with Google
  </Button>
  <Button variant="primary" type="submit" onSubmit={handleLogin}>
    Submit
  </Button>
</Form>
  )

}