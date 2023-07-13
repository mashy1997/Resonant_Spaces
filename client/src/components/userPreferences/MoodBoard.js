import React, {useState} from "react";
import ImageGalleryView from "./ImageGalleryView";

const MoodBoard = ({newMoodBoard}) => {

    const[isShowingArtwork, setisShowingArtwork] = useState(false)

    const viewMoodboard = () => {
        setisShowingArtwork(!isShowingArtwork)
        // const moodboardDisplay = newMoodBoard
        // return(moodboardDisplay)
    }

    const moodboardArtwork = newMoodBoard.savedArtworks.map(artwork => {
        return <p key={artwork.id}>{artwork.title}</p>
    })


    return (
        <>
        <div className="Moodboard-component">
        <h2>{newMoodBoard.name}</h2>
        <button onClick={viewMoodboard}>View MoodBoard</button>
        {isShowingArtwork && moodboardArtwork}
        </div>
        </>
    )
}

export default MoodBoard