import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Curriculum from "./pages/cv/Curriculum";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import Skill from "./pages/skills/Skill";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import Certifications from "./pages/Certifications/Certifications";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="box-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
