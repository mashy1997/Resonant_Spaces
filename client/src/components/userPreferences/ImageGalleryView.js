import React, {useState, useEffect} from "react";
import SingleImage from "./SingleImage";
import MoodBoard from "./MoodBoard";

const ImageGalleryView = ({artworkList, addArtworkToMoodBoard}) => {

    const handleAddToMoodboard = (chosenArtwork) => {
      addArtworkToMoodBoard(chosenArtwork);
      console.log("Artwork added to moodboard:", chosenArtwork)
    }

    // const artworkItems = artworkList.map((artwork, index) => {
    //     return (
    //         <SingleImage artwork={artwork} key={index}/>
    //     )
    // })

    return (
        <div>
        <ul>
          {artworkList.map((artwork, index) => (
            <div key={index}>
              <SingleImage artwork={artwork} />
              <button onClick={() => handleAddToMoodboard(artwork)}>
                Add to Moodboard
              </button>
            </div>
          ))}
        </ul>
        {/* <button onClick={handleAddToMoodboard}>Create MoodBoard</button> */}
      </div>
        // <div>
        //     <ul>
        //         {artworkItems}
        //     </ul>
        //     <button onClick={createMoodBoard}>Create MoodBoard</button>
        // </div>
    )
}

export default ImageGalleryView;