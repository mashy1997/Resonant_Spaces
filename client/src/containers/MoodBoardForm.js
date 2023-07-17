// import React, { useState } from "react";

// const MoodBoardForm = ({ createMoodBoard }) => {
//   const [name, setName] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     createMoodBoard(name);
//     setName("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         MoodBoard Name:
//         <input type="text" value={name} onChange={handleNameChange} />
//       </label>
//       <button type="submit">Create MoodBoard</button>
//     </form>
//   );
// };

// export default MoodBoardForm;