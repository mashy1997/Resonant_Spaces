import React from "react";
import "./SingleImage.css";

const ColorSingleImage = ({artworkColor}) => {

    console.log(artworkColor)
    
    if (!artworkColor.images || artworkColor.images.length === 0) {
        return null; // Skip rendering if there are no images
    }

    const firstImage = artworkColor.images[0];
    if (!firstImage || !firstImage.b || !firstImage.b.url) {
    return null; // Skip rendering if the necessary image properties are missing
    }

      return (
        <>
          <div className="Single-image-component">
            <img className="Single-image" src={firstImage.b.url} alt="Artwork" />
            <p className="Artwork-description">{artworkColor.title}</p>
            <p className="Artwork-description">{artworkColor.participants.person_name}</p>
          </div>
        </>
      );
};

export default ColorSingleImage
