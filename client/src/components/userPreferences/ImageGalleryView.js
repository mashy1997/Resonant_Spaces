import React, { useState } from "react";
import SingleImage from "./SingleImage";
import MoodBoard from "./MoodBoard";
import ColorSingleImage from "./ColorSingleImage";
import "./ImageGalleryView.css"

const ImageGalleryView = ({
  artworkList,
  colorArtworkList,
  addArtworkToMoodBoard,
  moodboards,
  // updateMoodBoard
}) => {

  const [selectedMoodboardId, setSelectedMoodboardId] = useState("");

  const handleAddToMoodboard = (artwork) => {
    if (selectedMoodboardId) {
      addArtworkToMoodBoard(artwork, selectedMoodboardId); //
    } else {
      alert("Please select a moodboard."); 
    }
  };

  const handleChange = (event) => {
    console.log("handling the change of the drop down evt", event.target.value)
    setSelectedMoodboardId(event.target.value)
  };



  return (
    <div>
      <ul className="Image-gallery-view-component">
        {artworkList.map((artwork, index) => {
          if (!artwork.images || artwork.images.length === 0) {
            return null; // Skip rendering the component if there are no images
          } 
          return (
            <div key={index}>
              <SingleImage artwork={artwork} />
              <div>
              <select value={selectedMoodboardId} onChange={handleChange}>
                <option value="">Select Moodboard</option>
                {moodboards.map((moodboard) => (
                  <option key={moodboard._id} value={moodboard._id}>
                    {moodboard.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="add-to-moodboard-button" onClick={() => {handleAddToMoodboard(artwork)}}>Add to Moodboard
            </button>
            </div>
          );
        })}
      </ul>
      <ul className="Image-gallery-view-component">
        {colorArtworkList.map((artworkColor, index) => {

          return (
            <div key={index}>
              <ColorSingleImage artworkColor={artworkColor} />
              <select value={selectedMoodboardId} onChange={handleChange}>
                <option value="">Select Moodboard</option>
                {moodboards.map((moodboard) => (
                  <option key={moodboard._id} value={moodboard._id}>
                    {moodboard.name}
                  </option>
                ))}
              </select>
              <button onClick={() => {handleAddToMoodboard(artworkColor)}}>Add to Moodboard</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGalleryView;

