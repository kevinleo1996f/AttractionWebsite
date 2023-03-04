import React, { useState, useEffect } from "react";

export default function Login() {
  const [name, setName] = useState("")  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const emailFromStorage = localStorage.getItem("email");
    const passwordFromStorage = localStorage.getItem("password");
    const nameFromStorage = localStorage.getItem("name");
    if (emailFromStorage && passwordFromStorage && nameFromStorage) {
        setName(nameFromStorage);
        setEmail(emailFromStorage);
        setPassword(passwordFromStorage);
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // Retrieve user object from LocalStorage
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      setIsLoggedIn(true);
      alert("You're Logged in" + {name})
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {isLoggedIn && <p>You are logged in {name}!</p>}
    </div>
  );
}