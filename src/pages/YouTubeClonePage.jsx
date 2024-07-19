import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Video from "./Video";
import "../styles/YouTubeClonePage.css";

const YouTubeClonePage = () => {
  const [sidebar, setSidebar] = useState(true);
  
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home  sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default YouTubeClonePage;