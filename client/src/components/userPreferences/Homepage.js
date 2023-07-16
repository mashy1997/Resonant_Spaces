import React, {useState} from "react";
import { Link } from "react-router-dom";
import ArtworkPreferenceOptionsContainer from "../../containers/ArtworkOptionsContainer";

const Homepage = () => {
    return (
      <>
        <div className="Homepage-heading">
          <h1>Start your resonant space journey here:</h1>
        </div>
        <div className="Homepage-buttons">
          <Link to="/color">
            <button>Color</button>
          </Link>
          <Link to="/theme">
            <button>Theme</button>
          </Link>
        </div>
      </>
    );
  };
  
  export default Homepage;