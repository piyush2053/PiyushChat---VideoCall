import React, { } from "react";
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios'
import { apiEndPoints } from "../ApiEndPoints/apiEndPoints";

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
    //sending to BAckend
    axios.post(apiEndPoints.urlCreateUser, {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`
    })
      .then((response) => {
        console.log(response.data);
      }, (error) => {
        console.log(error);
      });
    event.target.reset();
    navigate('/');
  };
  return (
    <div className="signup-form">
      <div className="container">
        <div className="header">
          <h1>Create Account</h1>
          <p style={{ color: "grey", padding: "10px", fontSize: "10px" }}>Piyush Chat is video calling application just to build for a personal project and to learn react as well and trying to get to know about the capabilities of React Native.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <i className="fa fa-user"></i>
            <input type="text" id="firstName" name="firstName" className="name" placeholder="Name" ref={nameRef} />
          </div>
          <div className="input">
            <i className="fa fa-envelope"></i>
            <input
              type="email"
              id="email"
              name="email"
              className="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="input">
            <i className="fa fa-key"></i>

            <input
              type="text"
              id="password"
              name="password"
              className="password"
              placeholder="Password "
              ref={passwordRef}
            />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <br />
        <p style={{ fontSize: "12px" }}>Already have an account <a href="/"> Sign in</a></p>
      </div>
    </div>

  );
};

export default Signup;
