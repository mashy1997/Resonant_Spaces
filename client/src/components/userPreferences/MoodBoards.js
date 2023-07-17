import React from "react";

const Moodboards = ({ moodboards, deleteArtworkFromMoodBoard }) => {
  const handleDeleteArtwork = (moodboardId, artworkId) => {
    deleteArtworkFromMoodBoard(moodboardId, artworkId);
  };

  return (
    <>
      <div className="Moodboards-component">
        <h2>Moodboards</h2>
        {moodboards.map((moodboard) => (
          <div key={moodboard._id} className="Moodboard">
            <h3>{moodboard.name}</h3>
            <button onClick={() => handleDeleteArtwork(moodboard._id, moodboard._id)}>
              Delete Moodboard
            </button>
            {moodboard.savedArtworks.map((artwork) => (
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
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Moodboards;