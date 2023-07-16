import React from "react";

const ThemeSelection = ({ handleCultureClick, handleReligionClick, handlePeriodClick, handleCenturyClick }) => {

  console.log(handleCenturyClick, handleReligionClick, handlePeriodClick, handleCultureClick)


    return (
    <div className="Theme-button-container">
      <div className="Culture-button-container">
        <button id="American" onClick={handleCultureClick}>American</button>
        <button id="British" onClick={handleCultureClick}>British</button>
        <button id="American" onClick={handleCultureClick}>American</button>
        <button id="British" onClick={handleCultureClick}>British</button>
        <button id="Chinese" onClick={handleCultureClick}>Chinese</button>
        <button id="Dutch" onClick={handleCultureClick}>Dutch</button>
        <button id="Egyptian" onClick={handleCultureClick}>Egyptian</button>
        <button id="French" onClick={handleCultureClick}>French</button>
        <button id="German" onClick={handleCultureClick}>German</button>
        <button id="Greek" onClick={handleCultureClick}>Greek</button>
        <button id="Indian" onClick={handleCultureClick}>Indian</button>
        <button id="Italian" onClick={handleCultureClick}>Italian</button>
        <button id="Japanese" onClick={handleCultureClick}>Japanese</button>
        <button id="Korean" onClick={handleCultureClick}>Korean</button>
        <button id="Persian" onClick={handleCultureClick}>Persian</button>
        <button id="Roman" onClick={handleCultureClick}>Roman</button>
        <button id="Russian" onClick={handleCultureClick}>Russian</button>
      </div>
      <div className="Religion-button-container">
        <button id="Christian" onClick={handleReligionClick}>Christian</button>
        <button id="Islam" onClick={handleReligionClick}>Islam</button>
        <button id="Jewish" onClick={handleReligionClick}>Jewish</button>
      </div>
      <div className="Period-button-container">
      <button id="Neolithic" onClick={handlePeriodClick}>Neolithic</button>
        <button id="BronzeAge" onClick={handlePeriodClick}>Bronze Age</button>
        <button id="IronAges" onClick={handlePeriodClick}>Iron Ages</button>
        <button id="Archaic" onClick={handlePeriodClick}>Archaic</button>
        <button id="Geometric" onClick={handlePeriodClick}>Geometric</button>
        <button id="Classical" onClick={handlePeriodClick}>Classical</button>
        <button id="Mughal" onClick={handlePeriodClick}>Mughal</button>
        <button id="Ottoman" onClick={handlePeriodClick}>Ottoman</button>
        <button id="QingDynasty" onClick={handlePeriodClick}>Qing Dynasty</button>
        <button id="Edo" onClick={handlePeriodClick}>Edo</button>
        <button id="Modern" onClick={handlePeriodClick}>Modern</button>
      </div>
      <div className="Century-button-container">
        <button id="12" onClick={handleCenturyClick}>12</button>
        <button id="13" onClick={handleCenturyClick}>13</button>
        <button id="14" onClick={handleCenturyClick}>14</button>
        <button id="15" onClick={handleCenturyClick}>15</button>
        <button id="16" onClick={handleCenturyClick}>16</button>
        <button id="17" onClick={handleCenturyClick}>17</button>
        <button id="18" onClick={handleCenturyClick}>18</button>
        <button id="19" onClick={handleCenturyClick}>19</button>
        <button id="20" onClick={handleCenturyClick}>20</button>
        <button id="21" onClick={handleCenturyClick}>21</button>
        </div>
      </div>
    )
}

export default ThemeSelection;