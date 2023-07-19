import React, {useState} from "react";
import ImageGalleryView from "./ImageGalleryView";
import ColorSingleImage from "./ColorSingleImage";

const MoodBoard = ({newMoodBoard, deleteArtworkFromMoodBoard}) => {

    const[isShowingArtwork, setisShowingArtwork] = useState(false)

    const viewMoodboard = () => {
        setisShowingArtwork(!isShowingArtwork)
        // const moodboardDisplay = newMoodBoard
        // return(moodboardDisplay)
    }

    const handleDeleteArtwork = (artworkId, newMoodBoard) => {
        deleteArtworkFromMoodBoard(artworkId, newMoodBoard)
    }
    

    const moodboardArtwork = newMoodBoard.savedArtworks.map((artwork, index) => (
      <div key={artwork._id || index}>
        {artwork.images && artwork.images.length > 0 && (
          <img className="Single-image" src={artwork.contact ? artwork.images[0].baseimageurl : artwork.images[0]?.b?.url}/>
        )}
        <p>{artwork.title}</p>
        <p>{artwork.people && artwork.people.length ? artwork.people[0].name : ""}</p>
        <button onClick={() => handleDeleteArtwork(artwork.id, newMoodBoard)}>Delete Artwork</button>
      </div>
    ));

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