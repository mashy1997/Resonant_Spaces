import React from "react";
import MoodBoard from "./MoodBoard";

const Moodboards = ({ moodboards, deleteArtworkFromMoodBoard, deleteMoodboard }) => {
  const handleDeleteArtwork = (moodboardId, artworkId) => {
    deleteArtworkFromMoodBoard(moodboardId, artworkId);
  };

 
  return (
    <>
      <div className="Moodboards-component">
        <h2>Moodboards</h2>
        {moodboards.map((moodboard) => (
          <div key={moodboard._id} className="Moodboard">
            <MoodBoard
              key={moodboard._id}
              newMoodBoard={moodboard}
              deleteArtworkFromMoodBoard={deleteArtworkFromMoodBoard}
            />
            <button onClick={() => deleteMoodboard(moodboard._id)}>
              Delete MoodBoard
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Moodboards;