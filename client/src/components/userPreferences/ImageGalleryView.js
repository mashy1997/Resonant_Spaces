import React, {useState, useEffect} from "react";
import SingleImage from "./SingleImage";
import MoodBoard from "./MoodBoard";

const ImageGalleryView = ({artworkList, addArtworkToMoodBoard}) => {

    const handleAddToMoodboard = (chosenArtwork) => {
      addArtworkToMoodBoard(chosenArtwork);
      console.log("Artwork added to moodboard:", chosenArtwork)
    }

    // return (
    //   <>
    //     <div className="Image-gallery-view-component">
    //     <ul>
    //       {artworkList.map((artwork, index) => (
    //         <div key={index}>
    //           <SingleImage artwork={artwork} />
    //           <button onClick={() => handleAddToMoodboard(artwork)}>
    //             Add to Moodboard
    //           </button>
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    //   </>
    // )
    return (
      <div className="Image-gallery-view-component">
        <ul>
          {artworkList.map((artwork, index) => {
            const handleAddToMoodboard = () => {
              addArtworkToMoodBoard(artwork);
              console.log("Artwork added to moodboard:", artwork);
            };
  
            if (!artwork.images || artwork.images.length === 0) {
              return null; // Skip rendering the component if there are no images
            }
  
            return (
              <div key={index}>
                <SingleImage artwork={artwork} />
                <button onClick={handleAddToMoodboard}>Add to Moodboard</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
}

export default ImageGalleryView;