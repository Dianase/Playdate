import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { Form, Button } from "react-bootstrap";
import "../styles/login.css";
import { UserContext } from "../App";
import firebaseConfig from "../credentials";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const afterLogin = async (creds) => {
    const jwt = await creds.user.getIdToken();
    localStorage.setItem("jwt", jwt);
    setUser(creds.user);
    setIsLoggedIn(true);
    navigate("/Profile");
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(afterLogin).catch(alert);
  };
  return (
    <div className="login-form" style={{height:"90vh" }}>
      <Form onSubmit={loginWithGoogle}>
        <img
          src="Xlogobg.png"
          alt="app logo with word xplore"
          style={{ height: "120px" }}
        />
        <h2 style={{ textAlign: "center", padding: "20px" }}>
          Login to Xplore
        </h2>

        <Button
          variant="primary"
          style={{ padding: "10px", margin: "25px" }}
          onClick={loginWithGoogle}
        >
          Login with Google
        </Button>
      </Form>
    </div>
  );
}
