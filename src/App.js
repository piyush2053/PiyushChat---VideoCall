import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Room from "./pages/Room.jsx";
import Homepage from "./pages/Homepage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Login />} />
          <Route exact path="/home"  element={<Homepage />} />
          <Route exact path="/signup"  element={<Signup />}  />
          <Route exact path="/room/:roomId"  element={<Room />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
