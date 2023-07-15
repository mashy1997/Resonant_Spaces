import React from "react";
import { Link } from "react-router-dom";

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
            <button>Theme</button>
        </div>
        </>
    )
}

export default Homepage