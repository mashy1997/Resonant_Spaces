import React from 'react';
import './SingleImage.css';


const SingleImage = ({artwork}) => {
    if (!artwork.images || artwork.images.length === 0) {
        return null; // Skip rendering the component if there are no images
      }


    return(
        <>
        <div className="Single-image-component">
        {/* <img className="Single-image" src={artwork.images[0].baseimageurl} alt="list of art"/> */}
        <img className="Single-image" src={artwork.images && artwork.images.length ? artwork.images[0].baseimageurl :null}/>
        <p className="Artwork-description">{artwork.title === undefined ? "" : artwork.title}</p>
        <p className="Artwork-description">{artwork.people === undefined ? "" : artwork.people[0].name}</p>
        </div>
        </>
    )
}

export default SingleImage