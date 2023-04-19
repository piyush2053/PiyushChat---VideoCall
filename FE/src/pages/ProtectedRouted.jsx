/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";

const ProtectedRoutes = () => {

    const navigate = useNavigate();
    const [userData, setUser] = useState({})

    useEffect(() => {
        axios.get("http://localhost:3000/verify", {
            headers: {
                "accesstoken": localStorage.getItem("token"),
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }
        )
            .then((res) => {
                setUser(res.data.result)
            }
            ).catch(function (error) {
                // setUser(null)
                console.log("error")
            });
    }, [])
    return userData !== null ? <Outlet /> : navigate("/")
};

export default ProtectedRoutes;