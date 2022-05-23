import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import CustomSettings from "./views/CustomSettings";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-setting" element={<CustomSettings />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
