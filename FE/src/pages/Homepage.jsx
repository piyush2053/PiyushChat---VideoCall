import React from "react"
import { user1, user2, user3 } from "./Users"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Homepage.css'



const Homepage = () => {
    const navigate = useNavigate()
    const [friend, setFriend] = useState();
    let userName = localStorage.getItem("name")

    const clickCall = (email, name) => {
        console.log(email)
        let xyz = document.getElementById("calling")
        xyz.style.display = "flex"
        setFriend(name)
        localStorage.setItem("friendsName", name)

        //calling..................
        //sendMail function
        async function sendEmail(name, email) {
            const CallLink = `http://localhost:3000/room/${name}`
            const data = JSON.stringify({
                "Messages": [{
                    "From": { "Email": "kickstartcodes@gmail.com", "Name": "Rent Easy" },
                    "To": [{ "Email": email, "Name": name }],
                    "Subject": `Call`,
                    "TextPart": `Your friend is calling please join this link ${CallLink}`
                }]
            });

            const config = {
                method: 'post',
                url: 'https://api.mailjet.com/v3.1/send',
                data: data,
                headers: { 'Content-Type': 'application/json' },
                auth: { username: '7c6d0f681bf935af8961905ae46b1ae6', password: 'f23dacbfc3cff9aada4dd69a4d1e4bcf' },
            };
            return axios(config)
                .then(function (response) {
                    console.log(",kqwugdiqgfxqwvgefqwjm", JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log("axios---:", error);
                });
        }
        sendEmail(name, email);
        // navigate(`/room/${name}`);
        // setInterval(function () { navigate(`/room/${name}`) }, 2000);
    }

    return (
        <>
            <div style={{ backgroundColor: "white", boxShadow: 'inherit', padding: "25px", borderRadius: "20px" }}>
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

