import React from "react";
import "./ThemeSelection.css"

const ThemeSelection = ({ handleCultureClick, handleReligionClick, handlePeriodClick, handleCenturyClick }) => {

  console.log({handleCenturyClick}, {handleReligionClick}, {handlePeriodClick}, {handleCultureClick})


    return (
    <div className="Theme-button-container">
      <div className="Culture-button-container">
        <button className="American" id="American" onClick={handleCultureClick}>American</button>
        <button className="Chinese" id="Chinese" onClick={handleCultureClick}>Chinese</button>
        <button className="Dutch" id="Dutch" onClick={handleCultureClick}>Dutch</button>
        <button className="Egyptian" id="Egyptian" onClick={handleCultureClick}>Egyptian</button>
        <button className="French" id="French" onClick={handleCultureClick}>French</button>
        <button className="German" id="German" onClick={handleCultureClick}>German</button>
        <button className="Greek" id="Greek" onClick={handleCultureClick}>Greek</button>
        <button className="Indian" id="Indian" onClick={handleCultureClick}>Indian</button>
        </div>
        <div className="Culture-button-container2">
        <button className="Italian" id="Italian" onClick={handleCultureClick}>Italian</button>
        <button className="Japanese" id="Japanese" onClick={handleCultureClick}>Japanese</button>
        <button className="Korean" id="Korean" onClick={handleCultureClick}>Korean</button>
        <button className="Persian" id="Persian" onClick={handleCultureClick}>Persian</button>
        <button className="Roman" id="Roman" onClick={handleCultureClick}>Roman</button>
        <button className="Russian" id="Russian" onClick={handleCultureClick}>Russian</button>
      </div>
      <div className="Religion-button-container">
        <button className="Religion" id="Christian" onClick={handleReligionClick}>Christian</button>
        <button className="Religion" id="Islam" onClick={handleReligionClick}>Islam</button>
        <button className="Religion" id="Jewish" onClick={handleReligionClick}>Jewish</button>
      </div>
      <div className="Period-button-container">
      <button className="Period" id="Neolithic" onClick={handlePeriodClick}>Neolithic</button>
        <button className="Period" id="BronzeAge" onClick={handlePeriodClick}>Bronze Age</button>
        <button className="Period" id="IronAges" onClick={handlePeriodClick}>Iron Ages</button>
        <button className="Period" id="Archaic" onClick={handlePeriodClick}>Archaic</button>
        <button className="Period" id="Geometric" onClick={handlePeriodClick}>Geometric</button>
        <button className="Period" id="Classical" onClick={handlePeriodClick}>Classical</button>
        <button className="Period" id="Mughal" onClick={handlePeriodClick}>Mughal</button>
        </div>
        <div className="Period2">
        <button className="Period" id="Ottoman" onClick={handlePeriodClick}>Ottoman</button>
        <button className="Period" id="QingDynasty" onClick={handlePeriodClick}>Qing Dynasty</button>
        <button className="Period" id="Edo" onClick={handlePeriodClick}>Edo</button>
        <button className="Period" id="Modern" onClick={handlePeriodClick}>Modern</button>
      </div>
      <label className="Centuries">Centuries:</label>
      <div className="Century-button-container">
        <button className="Century" id="12" onClick={handleCenturyClick}>12</button>
        <button className="Century" id="13" onClick={handleCenturyClick}>13</button>
        <button className="Century" id="14" onClick={handleCenturyClick}>14</button>
        <button className="Century" id="15" onClick={handleCenturyClick}>15</button>
        <button className="Century" id="16" onClick={handleCenturyClick}>16</button>
        <button className="Century" id="17" onClick={handleCenturyClick}>17</button>
        <button className="Century" id="18" onClick={handleCenturyClick}>18</button>
        <button className="Century" id="19" onClick={handleCenturyClick}>19</button>
        <button className="Century" id="20" onClick={handleCenturyClick}>20</button>
        <button className="Century" id="21" onClick={handleCenturyClick}>21</button>
        </div>
      </div>
    )
}

export default ThemeSelection;