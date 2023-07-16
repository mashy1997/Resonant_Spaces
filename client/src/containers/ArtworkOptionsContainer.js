import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { API_KEY, API_KEY2 } from '../env.js';
import ImageGalleryView from '../components/userPreferences/ImageGalleryView.js';
import MoodBoard from "../components/userPreferences/MoodBoard.js";
import Homepage from "../components/userPreferences/Homepage.js";
import ColorSelection from "../components/userPreferences/ColorSelection.js";
import ThemeSelection from "../components/userPreferences/ThemeSelection.js";
import App from "../App.js";

const ArtworkPreferenceOptionsContainer = ({}) => {

    const[artworkList, setArtworkList] = useState([])
    const[colorArtworkList, setColorArtworkList] = useState([])
    const[newMoodBoard, setNewMoodBoard] = useState({
        name: "Pink Kitchen",
        savedArtworks: []
    })
    const[allMoodBoards, setAllMoodBoards] = useState([])


    const baseURL = 'https://api.harvardartmuseums.org/' + API_KEY;
    // const baseURLColor = 'https://api.collection.cooperhewitt.org/rest/' + API_KEY2; 


    const getqueryURL = (query) => {
        // const resultOfFetch = fetch(`https://api.harvardartmuseums.org/${query}apikey=` + API_KEY)
        const resultOfFetch = fetch(`https://api.harvardartmuseums.org/${query}apikey=` + API_KEY) //with 20 items request
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

    const getcolorqueryURL = (color) => {
        const resultOfFetch = fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=${API_KEY2}&color=${color}&page=1&per_page=20`)
        .then(data => data.json())
        .then(artworkColorData => setColorArtworkList(artworkColorData.objects))
        .catch((error) => {
            console.log(error)
        })
    }

    const color = {
        Pink: "pink",
        Orange: "orange",
        Grey: "grey",
        Yellow: "yellow",
        Blue: "blue",
        Green: "green",
        Red: "red",
        Black: "black",
        Purple: "purple",
        Brown: "brown",
        White: "white"
    }
    const colorObjectkey = Object.keys(color) 
    // console.log(colorObjectkey)
    const colorObjectValue = Object.values(color)
    // console.log(colorObjectValue)


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

    const deleteArtworkFromMoodBoard = (artworkId) => {
        setNewMoodBoard((previousMoodBoard) => {
          const updatedMoodBoard = { ...previousMoodBoard };
          const updatedSavedArtworks = updatedMoodBoard.savedArtworks.filter(
            (artwork) => artwork.id !== artworkId
          );
          updatedMoodBoard.savedArtworks = updatedSavedArtworks;
          return updatedMoodBoard;
        });
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

    const handleColorClick = (evt, id) => {
        console.log(evt)
        let colorEvent = evt.target
        console.log("this is COLOR EVENT:", colorEvent)
        let colorButtonId = evt.target.getAttribute('id')
        console.log("COLOR BUTTON:", colorButtonId)
        let colorButtonValue = color[colorButtonId]
        console.log("VALUE OF COLOR BUTTON", colorButtonValue)
        getcolorqueryURL(colorButtonValue)
    }


    return (
        <>
        <div className= "Preference-container">
        <ColorSelection handleColorClick = {handleColorClick}/>
        <ThemeSelection handleCultureClick = {handleCultureClick} handleReligionClick = {handleReligionClick} handleCenturyClick = {handleCenturyClick} handlePeriodClick = {handlePeriodClick} />
        </div>
        <ImageGalleryView artworkList={artworkList} colorArtworkList={colorArtworkList} addArtworkToMoodBoard={addArtworkToMoodBoard}/>
        <MoodBoard newMoodBoard={newMoodBoard} deleteArtworkFromMoodBoard={deleteArtworkFromMoodBoard}/>
        </>
    )

}

export default ArtworkPreferenceOptionsContainer;