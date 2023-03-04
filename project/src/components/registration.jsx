import React, {useState} from "react";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      // Add user object to LocalStorage
      localStorage.setItem(email, JSON.stringify({ name, email, password }));
      alert("Registration successful!");
    }
  
    return (
      <div>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }