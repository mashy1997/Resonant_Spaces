import React from "react";
import MoodBoard from "./MoodBoard";
import "./MoodBoards.css"

const Moodboards = ({ moodboards, deleteArtworkFromMoodBoard, deleteMoodboard }) => {
  const handleDeleteArtwork = (moodboardId, artworkId) => {
    deleteArtworkFromMoodBoard(moodboardId, artworkId);
  };

 
  return (
    <>
      <div className="Moodboards-component">
        <h2 className="moodboards-header">Moodboards</h2>
        {moodboards.map((moodboard) => (
          <div key={moodboard._id} className="Moodboard">
            <MoodBoard
              key={moodboard._id}
              newMoodBoard={moodboard}
              deleteArtworkFromMoodBoard={deleteArtworkFromMoodBoard}
            />
            <button className="delete-moodboard" onClick={() => deleteMoodboard(moodboard._id)}>
            ❌
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Moodboards;