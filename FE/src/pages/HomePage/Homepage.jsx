import React from "react"
import { user1, user2, user3 } from "../Users/Users"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Homepage.css'
import axios from "axios";

const Homepage = () => {

    //email

    //Email part
    
    //

    const navigate = useNavigate()
    const [friend, setFriend] = useState();
    let userName = localStorage.getItem("name")

    const clickCall = (email, name) => {
        console.log(email)
        let xyz = document.getElementById("calling")
        xyz.style.display = "flex"
        setFriend(name)
        localStorage.setItem("friendsName", name)
        navigate(`/room/${name}`);
        // setInterval(function () { navigate(`/room/${name}`) }, 2000);
    }
    const logout = () => {
        localStorage.setItem("Logged In Status", false)
        localStorage.removeItem("token")
        navigate('/')
    }

    return (
        <>
            <div style={{ backgroundColor: "white", boxShadow: 'inherit', padding: "25px", borderRadius: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h2>Welcome Back , {userName}</h2>
                    <p onClick={(e) => logout()} style={{ cursor: "pointer", backgroundColor: "#FF1744", width: "80px", color: "white", paddingLeft: "10px", borderRadius: "10px", paddingTop: "5px" }}>Logout <i className="fa fa-user"></i></p>
                </div>
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
            <br />
            <div style={{ backgroundColor: "white", boxShadow: 'inherit', padding: "25px", borderRadius: "20px" }}>
                <p style={{ backgroundColor: "#1E88E5", width: "100px", color: "white", paddingLeft: "10px", borderRadius: "10px" }}>Call History</p>
                <div><icon className="fa fa-phone" style={{ color: "green", fontSize: "20px" }}></icon><img alt="user1" src={user1.img} style={{ height: "40px", width: "40px", borderRadius: "50px", padding: "10px", }}></img>{user1.name}</div>
                <div><icon className="fa fa-phone" style={{ color: "Red", fontSize: "20px" }}></icon><img alt="user2" src={user2.img} style={{ height: "40px", width: "40px", borderRadius: "50px", padding: "10px", }}></img>{user2.name}</div>
            </div>
        </>
    )
};
export default Homepage;

