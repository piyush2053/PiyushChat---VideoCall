import React from "react";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios'
import { apiEndPoints } from './API-END-POINTS/apiEndPoints'


const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(undefined);
  const passwordRef = useRef(undefined);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios.post(apiEndPoints.urlAuth, {
      email: `${email}`,
      password: `${password}`
    })
      .then((response) => {
        if (response.data.data === true) {
          //room id maine User ka naam hi bana diaya because its a socket based chat room where people connect 
          //usme one to one kara hai and emitting a video so is approach se hi it can be done only.
          const roomId = "piyushChat";
          localStorage.setItem("roomID", roomId)
          console.log("True Credentials")
          localStorage.setItem("Logged In Status", true)
          navigate(`/home`);
          
          
        }
        else {
          alert("Credentials are wrong !")
        }

      }, (error) => {
        console.log(error);
      });

    event.target.reset();
  };
  const handleCookies = (event) => {
    let obj1 = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    }
    document.cookie = `"Email_password"=${JSON.stringify(obj1)}`
  };
  return (
    <>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Welcome to Piyush Chat</h1>
            <p style={{ color: "grey", padding: "10px", fontSize: "10px" }}>Piyush Chat is video calling application just to build for a personal project and to learn react as well and trying to get to know about the capabilities of React Native.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
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
            <div>

              <input type="checkbox" value="lsRememberMe" id="rememberMe" onClick={handleCookies} style={{ marginRight: "10px" }} />
              <label htmlFor="rememberMe" style={{ marginBottom: "10px" }}>Save password</label>
              <br />


              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
          <br />
          <p style={{ fontSize: "12px" }}>Create a New Account ?<a href="/signup"> Sign Up Here</a></p>

        </div >
      </div >
    </>
  )
};

export default Login;
