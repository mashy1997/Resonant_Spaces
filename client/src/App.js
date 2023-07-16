import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/userPreferences/Homepage";
import AboutSection from "./components/userPreferences/AboutSection";
import ArtworkPreferenceOptionsContainer from "./containers/ArtworkOptionsContainer";
import ErrorPage from "./components/userPreferences/ErrorPage";
import ColorSelection from "./components/userPreferences/ColorSelection";
import ThemeSelection from "./components/userPreferences/ThemeSelection";
import { useState } from "react";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/color" element={<ArtworkPreferenceOptionsContainer />} />
        <Route path="/theme" element={<ArtworkPreferenceOptionsContainer />} />
        <Route path="/artwork" element={<ArtworkPreferenceOptionsContainer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedTheme, setSelectedTheme] = useState("");

//   const handleColorClick = (color) => {
//     setSelectedColor(color);
//   };

//   const handleThemeClick = (theme) => {
//     setSelectedTheme(theme);
//   };

//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<AboutSection />} />
//         <Route
//           path="/color"
//           element={<ColorSelection handleColorClick={handleColorClick} />}
//         />
//         <Route
//           path="/theme"
//           element={<ThemeSelection handleThemeClick={handleThemeClick} />}
//         />
//         <Route
//           path="/artwork"
//           element={
//             <ArtworkPreferenceOptionsContainer
//               selectedColor={selectedColor}
//               selectedTheme={selectedTheme}
//             />
//           }
//         />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;