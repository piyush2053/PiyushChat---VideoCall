import React from "react";
import "./Home.css"
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleJoin = useCallback(() => {
    // console.log(value)
    navigate(`/room/${value}`)
  }, [navigate, value])
  return (
    <>
      <h1>Homepage</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Room code"></input>
      <button onClick={handleJoin}>Join</button>
    </>
  )

};

export default Home;
