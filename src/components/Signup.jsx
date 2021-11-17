import React, { useState, useContext } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { UserContext } from '../App'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(UserContext)
  
  const createUser = (uid) => {
    const user = {
      email: email,
      password: password,
      count: 0,
      uid,
    }

    fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
      })
      .catch((err) => console.log(err))
  }

  const signUpHandler = (event) => {
    event.preventDefault()
    
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const json = JSON.stringify(res.user)
        localStorage.setItem('user', json)
        console.log(res.user)
        createUser(res.user.uid)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Container className="login-container">
      <Form onSubmit={(e) => signUpHandler(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={(e) => signUpHandler(e)}>
          Sign up
        </Button>
      </Form>
    </Container>
  )
}
