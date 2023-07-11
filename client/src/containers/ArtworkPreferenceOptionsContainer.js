import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { API_KEY } from '../env.js'
import ImageGalleryView from '../components/userPreferences/ImageGalleryView.js'

const ArtworkPreferenceOptionsContainer = () => {

    const[artworkList, setArtworkList] = useState([])


    const baseURL = 'https://api.harvardartmuseums.org/object?culture=37527759&apikey=' + API_KEY; //italian
    // const baseURL = 'https://api.harvardartmuseums.org/object?culture=37528362&apikey=' + API_KEY; //polish , bug with baseimg url
    // const baseURL = 'https://api.harvardartmuseums.org/object?culture=37527813&apikey=' + API_KEY; //jewish art,

    const culture = {
        American: 37526778,
        British: 37527039,
        Chinese: 37527174,
        Dutch: 37527300,
        Egyptian: 37527318,
        French: 37527426,
        German: 37527453,
        Greek: 37527534,
        Indian: 37527678,
        Islamic: 37527741,
        Italian: 37527759,
        Japanese: 37527795,
        Korean: 37527867,
        Persian: 37528308,
        Roman: 37528416,
        Russian: 37528461
    };

    const getAllArtworks = () => {
        fetch(baseURL)
            .then(res => res.json())
            .then(artworkData => setArtworkList(artworkData.records))
    }

    useEffect(getAllArtworks, [])

    useEffect(() => {
        // Log artworkList to the console whenever it changes
        console.log(artworkList);
      }, [artworkList]);
    

    return (
        <>
        <div className= "PreferenceContainer"/>
        <ImageGalleryView artworkList={artworkList} />
        </>
    )
}

export default ArtworkPreferenceOptionsContainer;