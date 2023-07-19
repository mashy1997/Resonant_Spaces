import React from "react";
import "./ColorSelection.css"

const ColorSelection = ({ handleColorClick }) => {

  console.log({handleColorClick})

    return (
        <div className="Color-button-container">
        <button className="pink-button" id="Pink" onClick={(event) => handleColorClick(event)}>Pink</button>
        <button className="orange-button" id="Orange" onClick={(event) => handleColorClick(event)}>Orange</button>
        <button className="grey-button" id="Grey" onClick={(event) => handleColorClick(event)}>Grey</button>
        <button className="yellow-button" id="Yellow" onClick={(event) => handleColorClick(event)}>Yellow</button>
        <button className="blue-button" id="Blue" onClick={(event) => handleColorClick(event)}>Blue</button>
        <button className="red-button" id="Red" onClick={(event) => handleColorClick(event)}>Red</button>
        <button className="black-button" id="Black" onClick={(event) => handleColorClick(event)}>Black</button>
        <button className="purple-button" id="Purple" onClick={(event) => handleColorClick(event)}>Purple</button>
        <button className="brown-button" id="Brown" onClick={(event) => handleColorClick(event)}>Brown</button>
        <button className="white-button" id="White" onClick={(event) => handleColorClick(event)}>White</button>
      </div>
    )
}

export default ColorSelection;

