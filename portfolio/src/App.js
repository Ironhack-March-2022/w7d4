import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import { Projects } from "./Projects";
import ProjectDetails from "./ProjectDetails";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>

    </div>
  );
}

export default App;