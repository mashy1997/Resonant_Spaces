import React from "react";
import MoodBoard from "./MoodBoard";

const Moodboards = ({ moodboards, deleteArtworkFromMoodBoard, deleteMoodboard }) => {
  const handleDeleteArtwork = (moodboardId, artworkId) => {
    deleteArtworkFromMoodBoard(moodboardId, artworkId);
  };

  //here do a button with handleclick/onclick passing in deleteMoodboard
  //const handleDeleteMoodboard = (artworkId?) => {
  //deleteMoodboard(artworkId)
  //}
  return (
    <>
      <div className="Moodboards-component">
        <h2>Moodboards helooooo</h2>
        {moodboards.map((moodboard) => (
          <div key={moodboard._id} className="Moodboard">
            <MoodBoard newMoodBoard={moodboard} deleteArtworkFromMoodBoard={deleteArtworkFromMoodBoard} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Moodboards;