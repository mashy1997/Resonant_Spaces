import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/userPreferences/Homepage";
import AboutSection from "./components/userPreferences/AboutSection";
import ArtworkPreferenceOptionsContainer from "./containers/ArtworkOptionsContainer";
import ErrorPage from "./components/userPreferences/ErrorPage";
import MoodBoardForm from "./containers/MoodBoardForm";
import FooterContainer from "./containers/FooterContainer";
// import ColorSelection from "./components/userPreferences/ColorSelection";
// import ThemeSelection from "./components/userPreferences/ThemeSelection";
// import Moodboards from "./components/userPreferences/MoodBoards";
// import MoodBoard from "./components/userPreferences/MoodBoard";


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/color" element={<ArtworkPreferenceOptionsContainer />} />
        <Route path="/theme" element={<ArtworkPreferenceOptionsContainer />} />
        <Route path="/artwork" element={<ArtworkPreferenceOptionsContainer />} />
        {/* <Route path="/moodboards" element={<MoodBoard />} /> */}
        {/* <Route path="/newmoodboard" element={< MoodBoardForm  />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    <FooterContainer />
    </>
  );
}

export default App;
