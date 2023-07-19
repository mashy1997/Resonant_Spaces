import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { API_KEY, API_KEY2 } from '../env.js';
import MoodBoard from "../components/userPreferences/MoodBoard.js";
import Homepage from "../components/userPreferences/Homepage.js";
import ColorSelection from "../components/userPreferences/ColorSelection.js";
import ThemeSelection from "../components/userPreferences/ThemeSelection.js";
import MoodBoards from "../components/userPreferences/MoodBoards.js";
import ImageGalleryView from "../components/userPreferences/ImageGalleryView.js";
import MoodBoardForm from "../containers/MoodBoardForm.js";
import Moodboards from "../components/userPreferences/MoodBoards.js";

const ArtworkPreferenceOptionsContainer = ({}) => {

    const[artworkList, setArtworkList] = useState([])
    const[colorArtworkList, setColorArtworkList] = useState([])
    const [newMoodBoard, setNewMoodBoard] = useState({
        name: "",
        savedArtworks: []
      });
    const[allMoodBoards, setAllMoodBoards] = useState([])
    const [selectedMoodboard, setSelectedMoodboard] = useState("");



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

    const fetchMoodBoards = async () => {
        try {
          const response = await fetch("http://localhost:9001/api/moodboards/");
          const data = await response.json();
          setAllMoodBoards(data);
        } catch (error) {
          console.log("Error fetching moodboards:", error);
        }
      };

      console.log("THIS IS FETCH MOODBOARDS:", fetchMoodBoards)
    
      useEffect(() => {
        fetchMoodBoards();
      }, []);


    const updateMoodBoardFetch = async (moodboard) =>  {
        console.log("I AM UPDATING MOODBOARD")
    await fetch("http://localhost:9001/api/moodboards/" + moodboard._id, {
      method: 'PUT',
      body: JSON.stringify(moodboard),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  }

      const updateMoodBoard = (moodBoardId, updatedMoodBoardData) => {
    // Implement the logic to update the moodboard using the provided moodboardId and updatedMoodBoard
        const updatedMoodBoards = allMoodBoards.map((moodboard) => {
          if (moodboard._id === moodBoardId) {
            return {
              ...moodboard,
              ...updatedMoodBoardData,
            };
          } else {
            return moodboard;
          }
        });
        setAllMoodBoards(updatedMoodBoards);
      };


    const createMoodBoard = (name) => {
        const moodBoard = {
          name: name,
          savedArtworks: []
        };
        postCreateMoodBoard(moodBoard)
    };


    const postCreateMoodBoard = async (moodboard) => {
      await fetch("http://localhost:9001/api/moodboards/", {
        method: 'POST',
        body: JSON.stringify(moodboard),
        headers:{
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(moodBoardWithId => setAllMoodBoards((prevMoodBoards) => [...prevMoodBoards, moodBoardWithId]))
    };


    const addArtworkToMoodBoard = (chosenArtwork, selectedMoodBoardID) => {
        // Check if a moodboard is selected
        if (selectedMoodBoardID) {
          const updatedMoodBoards = allMoodBoards.map((moodboard) => {
            if (moodboard._id === selectedMoodBoardID) {
              const updatedMoodBoard = {
                ...moodboard,
                savedArtworks: [...moodboard.savedArtworks, chosenArtwork],
              };
              updateMoodBoard(selectedMoodBoardID, updatedMoodBoard); // Call the updateMoodBoard function
              console.log("HIIIIIIIIIII:", updatedMoodBoard)
              updateMoodBoardFetch(updatedMoodBoard)
              return updatedMoodBoard;
            } else {
              return moodboard;
            }
          });
          setAllMoodBoards(updatedMoodBoards);
        }
      };

    // const deleteArtworkFromMoodBoard = (artworkId) => {
    //     setNewMoodBoard((previousMoodBoard) => {
    //       const updatedMoodBoard = { ...previousMoodBoard };
    //       const updatedSavedArtworks = updatedMoodBoard.savedArtworks.filter(
    //         (artwork) => artwork.id !== artworkId
    //       );
    //       updatedMoodBoard.savedArtworks = updatedSavedArtworks;
    //       return updatedMoodBoard;
    //     });
    // };

    const deleteArtworkFromMoodBoard = async (artworkId, moodBoard) => {
      try {
        // Create a copy of the current moodboard
        const copyOfMoodBoard = {...moodBoard }      
        
        // Filter out the artwork to be deleted from the savedArtworks array
        copyOfMoodBoard.savedArtworks = copyOfMoodBoard.savedArtworks.filter(
          (artwork) => artwork.id !== artworkId
        );

       console.log({copyOfMoodBoard})
        // Update the moodboard in the backend
        await updateMoodBoardFetch(copyOfMoodBoard);
        // Update the moodboard state with the updated moodboard
       const copyOfAllMoodBoards = [... allMoodBoards]
       const indexToReplace = copyOfAllMoodBoards.findIndex(moodboardFromArray => moodboardFromArray.id === copyOfMoodBoard.id)
       console.log({indexToReplace})
       copyOfAllMoodBoards[indexToReplace] = copyOfMoodBoard
       console.log({copyOfMoodBoard})
       console.log({copyOfAllMoodBoards})
       setAllMoodBoards(copyOfAllMoodBoards)
      } catch (error) {
        console.log("Error deleting artwork from MoodBoard:", error);
      }
    };

    const fetchDeleteArtworkFromMoodBoard = async (moodboard) => {
      try {
        const response = await fetch("http://localhost:9001/api/moodboards/" + moodboard.id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(moodboard)
        });
        if (response.ok) {
          // Handle successful deletion
          console.log("Artwork deleted successfully");
        } else {
          // Handle error
          console.log("Error deleting artwork:", response.statusText);
        }
      } catch (error) {
        console.log("Error deleting artwork:", error);
      }
    };


    const deleteMoodboard = async (moodboardId) => {
      try {
        await fetchDeleteMoodboard(moodboardId);
        setAllMoodBoards((prevMoodboards) =>
          prevMoodboards.filter((moodboard) => moodboard._id !== moodboardId)
        );
      } catch (error) {
        console.log("Error deleting moodboard:", error);
      }
    };

    const fetchDeleteMoodboard = async (moodboardId) => {
      try {
        const response = await fetch(`http://localhost:9001/api/moodboards/${moodboardId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          // Handle successful deletion
          console.log("Moodboard deleted successfully");
        } else {
          // Handle error
          console.log("Error deleting moodboard:", response.statusText);
        }
      } catch (error) {
        console.log("Error deleting moodboard:", error);
      }
    };

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
        <MoodBoardForm createMoodBoard={createMoodBoard}/>
        <ColorSelection handleColorClick = {handleColorClick}/>
        <ThemeSelection handleCultureClick = {handleCultureClick} handleReligionClick = {handleReligionClick} handleCenturyClick = {handleCenturyClick} handlePeriodClick = {handlePeriodClick} />
        </div>
        <ImageGalleryView artworkList={artworkList} colorArtworkList={colorArtworkList} addArtworkToMoodBoard={addArtworkToMoodBoard} moodboards={allMoodBoards}/>
        {/* <MoodBoard newMoodBoard={newMoodBoard} deleteArtworkFromMoodBoard={deleteArtworkFromMoodBoard} /> */}
        <MoodBoards moodboards={allMoodBoards} deleteArtworkFromMoodBoard={deleteArtworkFromMoodBoard} deleteMoodboard={deleteMoodboard}/>
        </>
    )

}

export default ArtworkPreferenceOptionsContainer;