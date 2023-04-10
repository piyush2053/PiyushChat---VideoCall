import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Room from "./pages/Room.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Login />} />
          <Route path="/home"  element={<Home />}  />
          <Route exact path="/signup"  element={<Signup />}  />
          <Route exact path="/room/:roomId"  element={<Room />}  />
        </Routes>
      </Router>
    </>
  );
};

export default App;
