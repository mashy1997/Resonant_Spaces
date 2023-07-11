import React, {useState, useEffect} from "react";
import SingleImage from "./SingleImage";

const ImageGalleryView = ({artworkList}) => {

    const artworkItems = artworkList.map((artwork, index) => {
        return (
            <SingleImage artwork={artwork} key={index}/>
        )
    })

    return (
        <div>
            <ul>
                {artworkItems}
            </ul>
        </div>
    )
}

export default ImageGalleryView;