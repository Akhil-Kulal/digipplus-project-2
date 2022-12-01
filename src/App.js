import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import DigiChat from "./pages/DigiChat.js";
import ApplyForJob from "./pages/ApplyForJob.js";
import Certificate from "./pages/Certificate.js";
import Setting from "./pages/Setting.js";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applyForJob" element={<ApplyForJob />} />
          <Route path="/digichat" element={<DigiChat />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
