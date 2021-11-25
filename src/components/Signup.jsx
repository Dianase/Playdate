import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";
import { initializeApp } from "firebase/app";
import { Form, Button } from "react-bootstrap";
import firebaseConfig from "../credentials";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { Link } from "react-router-dom";
import { config } from "../config";

export default function Signup( ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigate = useNavigate()
  const {setUser, setIsLoggedIn} = useContext(UserContext)

  const createUser = (uid) => {
    const user = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      uid,
    };

    fetch(`${config.apiUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/Dashboard");
      })
      .catch((err) => console.log(err));
  };

  const signUpHandler = async (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword( auth, email, password)
      .then( async (res) => {
        console.log("thisone:", res)
        const jwt = await res.user.getIdToken()
        localStorage.setItem('jwt', jwt);
        setUser(res.user)
        setIsLoggedIn(true)
        const json = JSON.stringify(res.user);
        localStorage.setItem("user", json);
        console.log(res.user);
        createUser(res.user.uid);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <Form style={{margin: "350px"}} onSubmit={(e) => signUpHandler(e)}>
      <h2 style={{ textAlign: "center", padding: "30px" }}>
        Register to Xplore
      </h2>
      <Form.Group controlId="formBasicFirstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="firstName"
          placeholder="Enter Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicLastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="lastName"
          placeholder="Enter Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
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
      <Button style={{margin: "20px"}} variant="dark" type="submit" onClick={(e) => signUpHandler(e)}>
        Sign up
      </Button>
      <Link to="/Login" variant="body2">
        { "Already have an account?  -Sign In " }
      </Link>
    </Form>
  );
}
