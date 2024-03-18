import Navbar from "./Navbar";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import AboutMe from "./components/About";
import Nakre from "./components/Nakre";
import Stack from "./components/Stack";
import Contacts from "./components/Contacts";
import ProjectsC from "./components/ProjectsC";
import Footer from "./components/Footer";
import HomeE from "./components/HomeE";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Router>
        <Navbar />
        <div id="home">
          <HomeE />
        </div>
        <div id="nakre"></div>
        <div id="skills">
          <Stack />
        </div>
        <div id="projects">
          <ProjectsC />
        </div>
        <div id="contact">
          <Contacts />
        </div>

        <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Footer />
      </Router>
    </div>
  );
}
