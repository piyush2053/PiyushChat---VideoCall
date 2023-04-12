import React from "react"
import { user1, user2, user3 } from "./Users"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"
const Homepage = () => {
    const navigate = useNavigate()
    const [friend, setFriend] = useState();
    let userName = localStorage.getItem("name")
    // const CallLink = `http://localhost:3000/room/piyushChat`
    const clickCall = (email, name) => {
      console.log(email)
      let xyz = document.getElementById("calling")
      xyz.style.display = "flex"
      setFriend(name)
      navigate(`/room/${name}`)
      localStorage.setItem("friendsName", name)
    }
  
    return (
        <><div style={{backgroundColor: "white", boxShadow: 'inherit', padding: "25px", borderRadius: "20px"}}>
            <h2>Welcome Back , {userName}</h2>
            <p>So happy to Have you ! Have a chat with your friends and Tell them to login and Join you</p>
            <p style={{ backgroundColor: "Green", width: "100px", color: "white", paddingLeft: "10px", borderRadius: "10px" }}>Friends List</p>
            <div style={{ display: "flex" }}>
                <div style={{ textAlign: "center" }}>
                    <img alt="user1" onClick={(e) => clickCall(user1.email, user1.name)} src={user1.img} style={{ height: "100px", width: "100px", borderRadius: "50px", padding: "10px", }}></img>
                    <p>{user1.name}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img alt="user2" onClick={(e) => clickCall(user2.email, user2.name)} src={user2.img} style={{ height: "100px", width: "100px", borderRadius: "50px", padding: "10px", }}></img>
                    <p>{user2.name}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img alt="user3" onClick={(e) => clickCall(user3.email, user3.name)} src={user3.img} style={{ height: "100px", width: "100px", borderRadius: "50px", padding: "10px", }}></img>
                    <p>{user3.name}</p>
                </div>
            </div>
            <p className="blink" id="calling" style={{ display: "none", backgroundColor: "green", width: "190px", color: "white", padding: "10px", borderRadius: "10px" }}>Notifying {friend}</p>
            </div>
        </>
    )
};
export default Homepage;

