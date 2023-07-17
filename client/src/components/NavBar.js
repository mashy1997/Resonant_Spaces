import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./NavBar.css";
import logo from "../images/logo1.png";

const NavBar = () => {

  return (
    <>
  <div className="container">
    <div className="Logo">
      <img src={logo} alt="logo" />
      <h1 className="Title-navbar">
      <span className="Title-text">
      <Link to="/">
      Resonant Spaces
      </Link>
      </span>
      </h1>
      </div>
  </div>
    <ul className="NavBar" style={{ listStyleType: 'none'}}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/newmoodboard">+ Moodboard</Link>
      </li>
      <li>
        <Link to="/moodboards">My MoodBoards</Link>
      </li>
    </ul>
    </>
  );
}

export default NavBar;