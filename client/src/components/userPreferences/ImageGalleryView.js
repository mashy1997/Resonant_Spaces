import React, {useState, useEffect} from "react";
import SingleImage from "./SingleImage";
import MoodBoard from "./MoodBoard";
import ColorSingleImage from "./ColorSingleImage";

const ImageGalleryView = ({artworkList, colorArtworkList, addArtworkToMoodBoard}) => {


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
        <ul>
          {colorArtworkList.map((artworkColor, index) => {
            const handleAddToMoodboard = () => {
              addArtworkToMoodBoard(artworkColor);
              console.log("Artwork color added to moodboard:", artworkColor)
            };

            return (
              <div key={index}>
                <ColorSingleImage artworkColor={artworkColor} />
                <button onClick={handleAddToMoodboard}>Add to Moodboard</button>
              </div>
            )
          })}
        </ul>
      </div>
    );

}


export default ImageGalleryView;