import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const emailFromStorage = localStorage.getItem("email");
    const passwordFromStorage = localStorage.getItem("password");
    if (emailFromStorage && passwordFromStorage) {
      setEmail(emailFromStorage);
      setPassword(passwordFromStorage);
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // Retrieve user object from LocalStorage
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      setName(user.username);
      setIsLoggedIn(true);
      alert(`You're Logged in ${name}`);
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <MDBInput
          className="my-4 w-50"
          type="email"
          id="form2Example1"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <MDBInput
          className="mb-4 w-50"
          type="password"
          id="form2Example2"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <MDBBtn type="submit" className="mb-4" block>
          Sign in
        </MDBBtn>
      </form>
      {isLoggedIn && <p>You are logged in {name}!</p>}
    </div>
  );
}
