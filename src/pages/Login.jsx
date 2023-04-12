import React from "react";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';



const Login = () => {

  const navigate = useNavigate();
  const emailRef = useRef(undefined);
  const passwordRef = useRef(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let emailStored = localStorage.getItem("email")
    let passwordStored = localStorage.getItem("password")
    if (email === emailStored && password === passwordStored) {
      //room id maine User ka naam hi bana diaya because its a socket based chat room where people connect 
      //usme one to one kara hai and emitting a video so is approach se hi it can be done only.
      const roomId= "piyushChat";
      localStorage.setItem("roomID", roomId)
      console.log("True Credentials")
      navigate(`/home`);
    } else {
      alert("Credentials are wrong !")
    }
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
      <div class="signup-form">
        <div class="container">
          <div class="header">
            <h1>Welcome to Piyush Chat</h1>
            <p style={{ color: "grey", padding: "10px", fontSize: "10px" }}>Piyush Chat is video calling application just to build for a personal project and to learn react as well and trying to get to know about the capabilities of React Native.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
            
              <input
                type="text"
                id="email"
                name="email"
                class="email"
                placeholder="Email"
                ref={emailRef}
              />
              <br />
              <br />
              <div style={{display: "flex"}}>
                
              <input
                type="text"
                id="password"
                name="password"
                class="password"
                placeholder="Password "
                ref={passwordRef}
              />
              </div>
              <br />
              <input type="checkbox" value="lsRememberMe" id="rememberMe" onClick={handleCookies} />
              <label htmlFor="rememberMe">Save password</label>
              <br />


              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
          <br />
          <p style={{ fontSize: "12px" }}>Create a New Account ?<a href="/signup"> Sign Up Here</a></p>

        </div>
      </div>
    </>
  )
};

export default Login;
