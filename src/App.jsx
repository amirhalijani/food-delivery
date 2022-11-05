import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Home from "./components/HomePage/Home";
import Profile from "./components/ProfilePage/Profile";

const App = () => {
  return (
    <div className="mx-auto w-screen h-screen flex">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
