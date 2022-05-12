import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddChat, Login, PinDetail, SearchChat } from "./components";
import { Chatroom, Dashboard, Home, Service } from "./container";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pin-detail" element={<PinDetail />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
