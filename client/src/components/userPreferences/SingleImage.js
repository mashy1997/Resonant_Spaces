import React from "react"
import "./SingleImage.css"

const SingleImage = ({artwork}) => {

    // return null

    return(
        <>
        <div className="Single-image-component">
        {/* <img className="Single-image" src={artwork.images[0].baseimageurl} alt="list of art"/> */}
        <img className="Single-image" src={artwork.images === undefined ? "": artwork.images[0].baseimageurl}/>
        <p className="Artwork-description">{artwork.title === undefined ? "" : artwork.title}</p>
        <p className="Artwork-description">{artwork.people === undefined ? "" : artwork.people[0].name}</p>
        </div>
        </>
    )
}

export default SingleImage