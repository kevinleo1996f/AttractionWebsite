import React, {useState} from "react";
import {
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Registration() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      // Add user object to LocalStorage
      localStorage.setItem(email, JSON.stringify({  username, email, password}));
      alert("Registration successful!");
    }
  
    return (
      <div className=''>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
        <MDBInput  id='form3Example1' className='my-4 w-50' placeholder='First name' type="text"
              value={username}
              onChange={(event) => setName(event.target.value)}/>
        <MDBInput className='mb-4 w-50' type='email' id='form3Example3' placeholder='Email address'
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
        <MDBInput className='mb-4 w-50' type='password' id='form3Example4' placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)} />

        <MDBBtn type='submit' className='mb-4'>
          Sign up
        </MDBBtn>
        </form>
    </div>
    );
  }