import React from "react";
import MoodBoard from "./MoodBoard";

const Moodboards = ({ moodboards, deleteArtworkFromMoodBoard, deleteMoodboard }) => {
  const handleDeleteArtwork = (moodboardId, artworkId) => {
    deleteArtworkFromMoodBoard(moodboardId, artworkId);
  };

  return (
    <>
      <div className="Moodboards-component">
        <h2>Moodboards helooooo</h2>
        {moodboards.map((moodboard) => (
          <div key={moodboard._id} className="Moodboard">
            {/* <h3>{moodboard.name}</h3>
            <button onClick={() => deleteMoodboard(moodboard._id)}>
              Delete Moodboard
            </button> */}
            <MoodBoard newMoodBoard={moodboard} deleteArtworkFromMoodBoard={deleteArtworkFromMoodBoard} />
            {/* {moodboard.savedArtworks.map((artwork) => (
              <div key={`${moodboard._id}-${artwork.id}`}>
                {artwork.images && artwork.images.length > 0 && (
                  <img
                    className="Single-image"
                    src={artwork.images[0]?.b?.url}
                    alt={artwork.title}
                  />
                )}
                <p>{artwork.title}</p>
                <p>
                  {artwork.people && artwork.people.length
                    ? artwork.people[0].name
                    : ""}
                </p>
                <button
                  onClick={() => handleDeleteArtwork(moodboard._id, artwork.id)}
                >
                  Delete Artwork
                </button>
              </div>
            ))} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Moodboards;