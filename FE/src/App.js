import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/SignUp/Signup.jsx";
import Room from "./pages/Room/Room.jsx";
import Homepage from "./pages/HomePage/Homepage.jsx";
import { ProtectRoutes } from "./pages/ProtectedRouted.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route element={<ProtectRoutes />}> */}
            <Route exact path="/home" element={<Homepage />} />
            <Route exact path="/room/:roomId" element={<Room />} />
          {/* </Route> */}
          <Route exact path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
