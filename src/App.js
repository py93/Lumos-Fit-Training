import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Videos from "./components/videos.jsx";
import LikedVideos from "./components/likedVideos.jsx";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { NoMatch } from "./components/noMatch";
import { Header } from "./components/header";
import SavedVideos from "./components/savedVideos";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Videos />} />
          <Route path="/liked" element={<LikedVideos />} />
          <Route path="/saved" element={<SavedVideos />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}
