import React, {useState} from "react";
import { Link } from "react-router-dom";
import ArtworkPreferenceOptionsContainer from "../../containers/ArtworkOptionsContainer";
import "./Homepage.css"

const Homepage = () => {
    return (
      <>
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