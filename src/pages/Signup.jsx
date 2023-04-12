import React, { } from "react";
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const nameRef = useRef(undefined);
  const emailRef = useRef(undefined);
  const passwordRef = useRef(undefined);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    event.target.reset();
    navigate('/');
  };
  return (
    <div class="signup-form">
      <div class="container">
        <div class="header">
          <h1>Create Account</h1>
          <p style={{ color: "grey", padding: "10px", fontSize: "10px" }}>Piyush Chat is video calling application just to build for a personal project and to learn react as well and trying to get to know about the capabilities of React Native.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="input">
            <i class="fa fa-user"></i>
            <input type="text" id="firstName" name="firstName" class="name" placeholder="Name" ref={nameRef} />
          </div>
          <div class="input">
            <i class="fa fa-envelope"></i>
            <input
              type="text"
              id="email"
              name="email"
              class="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div class="input">
            <i class="fa fa-key"></i>

            <input
              type="text"
              id="password"
              name="password"
              class="password"
              placeholder="Password "
              ref={passwordRef}
            />
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
        <br />
        <p style={{ fontSize: "12px" }}>Already have an account <a href="/"> Sign in</a></p>
      </div>
    </div>

  );
};

export default Signup;
