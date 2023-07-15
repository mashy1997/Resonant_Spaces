import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/userPreferences/Homepage";
import AboutSection from "./components/userPreferences/AboutSection";
import ArtworkPreferenceOptionsContainer from "./containers/ArtworkOptionsContainer";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/about" element={< AboutSection />} />
        <Route path="/color" element={< ArtworkPreferenceOptionsContainer />} />
      </Routes>
    </Router>
    // <ArtworkPreferenceOptionsContainer/>
  );
}

export default App;
