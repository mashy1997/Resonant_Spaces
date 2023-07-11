import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { API_KEY } from '../env.js'
import ImageGalleryView from '../components/userPreferences/ImageGalleryView.js'

const ArtworkPreferenceOptionsContainer = () => {

    const[artworkList, setArtworkList] = useState([])


    const baseURL = 'https://api.harvardartmuseums.org/' + API_KEY; //need string concatination here
    // const baseURL = 'https://api.harvardartmuseums.org/object?culture=37528362&apikey=' + API_KEY; //polish , bug with baseimg url
    // const baseURL = 'https://api.harvardartmuseums.org/object?culture=37527813&apikey=' + API_KEY; //jewish art,

    const getqueryURL = (query) => {
        const resultOfFetch = fetch(`https://api.harvardartmuseums.org/${query}` + API_KEY)
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
        Islamic: "object?culture=37527741&",
        Italian: "object?culture=37527759&",
        Japanese: "object?culture=37527795&",
        Korean: "object?culture=37527867&",
        Persian: "object?culture=37528308&",
        Roman: "object?culture=37528416&",
        Russian: "object?culture=37528461&"
    };

    const cultureObjectkey = Object.keys(culture) 
    // console.log(cultureObjectkey)
    
    const cultureObjectValue = Object.values(culture)
    // console.log(cultureObjectValue)


    // useEffect(getAllArtworks, [])

    // useEffect(() => {
    //     // Log artworkList to the console whenever it changes
    //     console.log(artworkList);
    //   }, [artworkList]);

    const handleItalianClick = () => {
        let italianQuery = cultureObjectValue.Italian
        getqueryURL(italianQuery)
    }
    

    return (
        <>
        <div className= "PreferenceContainer"/>
        <ImageGalleryView artworkList={artworkList} />
        <label for="Italian"></label> <button id="Italian">Italian</button>
        {/* <button onClick={handleItalianClick}>Italian</button> */}
        </>
    )
}

export default ArtworkPreferenceOptionsContainer;