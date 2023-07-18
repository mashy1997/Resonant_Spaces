import React from "react";

const ColorSelection = ({ handleColorClick }) => {

  console.log({handleColorClick})

    return (
        <div className="Color-button-container">
        <button id="Pink" onClick={(event) => handleColorClick(event)}>Pink</button>
        <button id="Orange" onClick={(event) => handleColorClick(event)}>Orange</button>
        <button id="Grey" onClick={(event) => handleColorClick(event)}>Grey</button>
        <button id="Yellow" onClick={(event) => handleColorClick(event)}>Yellow</button>
        <button id="Blue" onClick={(event) => handleColorClick(event)}>Blue</button>
        <button id="Red" onClick={(event) => handleColorClick(event)}>Red</button>
        <button id="Black" onClick={(event) => handleColorClick(event)}>Black</button>
        <button id="Purple" onClick={(event) => handleColorClick(event)}>Purple</button>
        <button id="Brown" onClick={(event) => handleColorClick(event)}>Brown</button>
        <button id="White" onClick={(event) => handleColorClick(event)}>White</button>
      </div>
    )
}

export default ColorSelection;

