import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { API_KEY } from '../env.js'
import ImageGalleryView from '../components/userPreferences/ImageGalleryView.js'
import MoodBoard from "../components/userPreferences/MoodBoard.js";

const ArtworkPreferenceOptionsContainer = () => {

    const[artworkList, setArtworkList] = useState([])
    const[newMoodBoard, setNewMoodBoard] = useState({
        name: "Pink Kitchen",
        savedArtworks: []
    })
    const[allMoodBoards, setAllMoodBoards] = useState([])


    const baseURL = 'https://api.harvardartmuseums.org/' + API_KEY;


    const getqueryURL = (query) => {
        // const resultOfFetch = fetch(`https://api.harvardartmuseums.org/${query}apikey=` + API_KEY)
        const resultOfFetch = fetch(`https://api.harvardartmuseums.org/object?size=20&${query}apikey=` + API_KEY) //with 20 items request
        .then(data => data.json())
        .then(artworkData => setArtworkList(artworkData.records))
            .catch((error) => {
                console.log(error)
            })
    }

    const getAllArtworks = () => {
        fetch(baseURL)
            .then(res => res.json())
            .then(artworkData => setArtworkList(artworkData.records))
            .catch((error) => {
                console.log(error)
            })
    }

    const addArtworkToMoodBoard = (chosenArtwork) => {
        setNewMoodBoard((previousMoodBoard) => {
            const updatedMoodBoard = {...previousMoodBoard }
            const copyOfsavedArtworks = [...updatedMoodBoard.savedArtworks]
            copyOfsavedArtworks.push(chosenArtwork)
            return {
                ...updatedMoodBoard,
                savedArtworks: copyOfsavedArtworks
            }
        })
    };


    const culture = {
        American: "object?culture=37526778&",
        British: "object?culture=37527039&",
        Chinese: "object?culture=37527174&",
        Dutch: "object?culture=37527300&",
        Egyptian: "object?culture=37527318&",
        French: "object?culture=37527426&",
        German: "object?culture=37527453&",
        Greek: "object?culture=37527534&",
        Indian: "object?culture=37527678&",
        Italian: "object?culture=37527759&",
        Japanese: "object?culture=37527795&",
        Korean: "object?culture=37527867&",
        Persian: "object?culture=37528308&",
        Roman: "object?culture=37528416&",
        Russian: "object?culture=37528461&"
    };

    const cultureObjectkey = Object.keys(culture) 
    const cultureObjectValue = Object.values(culture)

    const religion = {
        Christian: "object?periods=1793&7386&7387&786&602&",
        Islam: "object?culture=37527741&",
        Jewish: "object?culture=37527813&"
    }

    const religionObjectKey = Object.keys(religion)
    const religionObjectValue = Object.values(religion)

    const period = {
        Neolithic: "object?periods=528&",
        BronzeAge: "object?periods=1284&",
        IronAges: "object?periods=401&",
        Archaic: "object?periods=928&",
        Geometric: "object?periods=4357&",
        Classical: "object?periods=1419&",
        Mughal: "object?periods=1522&",
        Ottoman: "object?periods=2376&",
        QingDynasty: "object?periods=398&",
        Edo: "object?periods=248&",
        Modern: "object?periods=5135&"

    }

    const periodObjectKey = Object.keys(period)
    const periodObjectValue = Object.values(period)

    const century = {
        12: "object?century=37525743&",
        13: "object?century=37525752&",
        14: "object?century=37525761&",
        15: "object?century=37525770&",
        16: "object?century=37525779&",
        17: "object?century=37525788&",
        18: "object?century=37525797&",
        19: "object?century=37525806&",
        20: "object?century=37525815&",
        21: "object?century=37525824&"
    }

    const centuryObjectKey = Object.keys(century)
    const centuryObjectValue = Object.values(century)

    const handleCultureClick = (evt, id) => {
        console.log(evt)
        let cultureEvent = evt.target
        console.log("this is CULTURE EVENT:", cultureEvent)
        let cultureButtonId = evt.target.getAttribute('id')
        console.log("CULTURE BUTTON:", cultureButtonId)
        let cultureButtonValue = culture[cultureButtonId]
        console.log("VALUE OF CULTURE BUTTON", cultureButtonValue)
        getqueryURL(cultureButtonValue)
    }

    const handleReligionClick = (evt, id) => {
        console.log(evt)
        let religionEvent = evt.target
        console.log("this is RELIGION EVENT:", religionEvent)
        let religionButtonId = evt.target.getAttribute('id')
        console.log("RELIGION BUTTON:", religionButtonId)
        let religionButtonValue = religion[religionButtonId]
        console.log("VALUE OF RELIGION BUTTON", religionButtonValue)
        getqueryURL(religionButtonValue)
    }

    const handlePeriodClick = (evt, id) => {
        console.log(evt)
        let periodEvent = evt.target
        console.log("THIS IS PERIOD EVENT:", periodEvent)
        let periodButtonId = evt.target.getAttribute('id')
        console.log("PERIOD BUTTON:", periodButtonId)
        let periodButtonValue = period[periodButtonId]
        console.log("VALUE OF PERIOD BUTTON", periodButtonValue)
        getqueryURL(periodButtonValue)
    }

    const handleCenturyClick = (evt, id) => {
        console.log(evt)
        let centuryEvent = evt.target
        console.log("THIS IS CENTURY EVENT:", centuryEvent)
        let centuryButtonId = evt.target.getAttribute('id')
        console.log("CENTURY BUTTON:", centuryButtonId)
        let centuryButtonValue = century[centuryButtonId]
        console.log("VALUE OF CENTURY BUTTON", centuryButtonValue)
        getqueryURL(centuryButtonValue)
    }

    return (
        <>
        <div className= "Preference-container"/>
        <div className="Culture-button-container"/>
        <label for="culture"></label> <button id="American" onClick={handleCultureClick}>American</button>
        <label for="culture"></label> <button id="British" onClick={handleCultureClick}>British</button>
        <label for="culture"></label> <button id="Chinese" onClick={handleCultureClick}>Chinese</button>
        <label for="culture"></label> <button id="Dutch" onClick={handleCultureClick}>Dutch</button>
        <label for="culture"></label> <button id="Egyptian" onClick={handleCultureClick}>Egyptian</button>
        <label for="culture"></label> <button id="French" onClick={handleCultureClick}>French</button>
        <label for="culture"></label> <button id="German" onClick={handleCultureClick}>German</button>
        <label for="culture"></label> <button id="Greek" onClick={handleCultureClick}>Greek</button>
        <label for="culture"></label> <button id="Indian" onClick={handleCultureClick}>Indian</button>
        <label for="culture"></label> <button id="Italian" onClick={handleCultureClick}>Italian</button>
        <label for="culture"></label> <button id="Japanese" onClick={handleCultureClick}>Japanese</button>
        <label for="culture"></label> <button id="Korean" onClick={handleCultureClick}>Korean</button>
        <label for="culture"></label> <button id="Persian" onClick={handleCultureClick}>Persian</button>
        <label for="culture"></label> <button id="Roman" onClick={handleCultureClick}>Roman</button>
        <label for="culture"></label> <button id="Russian" onClick={handleCultureClick}>Russian</button>
        <div className="Religion-button-container"/>
        <label for="religion"></label> <button id="Christian" onClick={handleReligionClick}>Christian</button>
        <label for="religion"></label> <button id="Islam" onClick={handleReligionClick}>Islam</button>
        <label for="religion"></label> <button id="Jewish" onClick={handleReligionClick}>Jewish</button>
        <div className="Period-button-container"/>
        <label for="period"></label> <button id="Neolithic" onClick={handlePeriodClick}>Neolithic</button>
        <label for="period"></label> <button id="BronzeAge" onClick={handlePeriodClick}>Bronze Age</button>
        <label for="period"></label> <button id="IronAges" onClick={handlePeriodClick}>Iron Ages</button>
        <label for="period"></label> <button id="Archaic" onClick={handlePeriodClick}>Archaic</button>
        <label for="period"></label> <button id="Geometric" onClick={handlePeriodClick}>Geometric</button>
        <label for="period"></label> <button id="Classical" onClick={handlePeriodClick}>Classical</button>
        <label for="period"></label> <button id="Mughal" onClick={handlePeriodClick}>Mughal</button>
        <label for="period"></label> <button id="Ottoman" onClick={handlePeriodClick}>Ottoman</button>
        <label for="period"></label> <button id="QingDynasty" onClick={handlePeriodClick}>Qing Dynasty</button>
        <label for="period"></label> <button id="Edo" onClick={handlePeriodClick}>Edo</button>
        <label for="period"></label> <button id="Modern" onClick={handlePeriodClick}>Modern</button>
        <div className="Century-button-container"/>
        <label for="century"></label> <button id="12" onClick={handleCenturyClick}>12</button>
        <label for="century"></label> <button id="13" onClick={handleCenturyClick}>13</button>
        <label for="century"></label> <button id="14" onClick={handleCenturyClick}>14</button>
        <label for="century"></label> <button id="15" onClick={handleCenturyClick}>15</button>
        <label for="century"></label> <button id="16" onClick={handleCenturyClick}>16</button>
        <label for="century"></label> <button id="17" onClick={handleCenturyClick}>17</button>
        <label for="century"></label> <button id="18" onClick={handleCenturyClick}>18</button>
        <label for="century"></label> <button id="19" onClick={handleCenturyClick}>19</button>
        <label for="century"></label> <button id="20" onClick={handleCenturyClick}>20</button>
        <label for="century"></label> <button id="21" onClick={handleCenturyClick}>21</button>
        <ImageGalleryView artworkList={artworkList} addArtworkToMoodBoard={addArtworkToMoodBoard}/>
        <MoodBoard newMoodBoard={newMoodBoard}/>
        </>
    )
}

export default ArtworkPreferenceOptionsContainer;