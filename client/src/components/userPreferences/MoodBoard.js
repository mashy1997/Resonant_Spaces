// import React, {useState} from "react";
// import ImageGalleryView from "./ImageGalleryView";

// const MoodBoard = ({artworkList}) => {

//     const [moodboard, setMoodboard] = useState([]);
//     const [newMoodboardName, setNewMoodboardName] = useState('');


//     const createMoodBoard = () => {
//         const newMoodBoard = {
//             name: newMoodboardName,
//             savedArtworks: []
//         };

//         setMoodboard(previousMoodBoards => [...previousMoodBoards, newMoodBoard]);
//         setNewMoodboardName('');
//     };

//     const handleNewMoodBoardNameChange = (event) => {
//         setNewMoodboardName(event.target.value)
//     };

//     return (
//         <>
//         <p>I am a moodboard</p>
//             <div className="MoodBoard-Form">
//             <input 
//             type= "text"
//             value= {newMoodboardName}
//             onChange= {handleNewMoodBoardNameChange}
//             placeholder= "Mood Board Name"
//             />
//                 <button onClick={createMoodBoard}>Create MoodBoard</button>
//             </div>
//             <h2>
//                 Saved MoodBoards
//             </h2>
//             <ul>
//                 {moodboard.map((moodboard, index) => (
//                     <li key={index}>{moodboard.name}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }

// export default MoodBoard