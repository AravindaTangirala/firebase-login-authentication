import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("logging in");
    auth
      .signInWithEmailAndPassword(userName, password)
      .then((response) => {
        setUser(response.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleRegister = () => {
    console.log("Registering");
    auth.createUserWithEmailAndPassword(userName, password).catch((error) => {
      setError(error.message);
    });
  };
  return (
    <div className="login">
      <h1>Please Login</h1>
      {user ? <p>You are Logged In</p> : <p>You are logged out</p>}
      {!user ? (
        <form className="app__login">
          <input
            type="text"
            value={userName}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
          {error && <p>{error}</p>}
        </form>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => auth.signOut()}
        >
          Logout
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={(e) =>
          auth.sendPasswordResetEmail(userName).catch((error) => {
            setError(error.message);
          })
        }
      >
        Forgot Password
      </Button>
    </div>
  );
}

export default Login;
