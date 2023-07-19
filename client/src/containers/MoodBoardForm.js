import React, { useState } from "react";
import "./MoodBoardForm.css"

const MoodBoardForm = ({ createMoodBoard }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMoodBoard(name);
    setName("");
  };

  return (
    <>
    <div className="moodboard-form-container">
    <form onSubmit={handleSubmit} className="moodboard-form">
        <input type="text" value={name} onChange={handleNameChange} placeholder="MoodBoard Name"/>
      <button type="submit" className="create-moodboard-button">Create MoodBoard</button>
    </form>
    </div>
    </>
  );
};

export default MoodBoardForm;