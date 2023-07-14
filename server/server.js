const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const createRouter = require('./helpers/create_router.js');

app.listen(9000, function () { 
    console.log('App running on port 9000');
  });


//fetching all moodboards
app.get("/api/moodboards", (req, res) => {
    MoodBoard.find().then((moodboards) => {
        res.status(200).json(moodboards);
    })
    .catch((error) => {
        console.log("Error fetching moodboards", error)
    });
});


//creating a new moodboard
app.post("/api/moodboards", (req, res) => {
    const {name, savedArtworks} = req.body;

    if(!name || !savedArtworks) {
        return res.status(400).json({message: "name and saved artworks required for a moodboard"})
    }

    const moodboard = new MoodBoard({name, savedArtworks})

    moodboard.save().then((savedMoodBoard) => {
        res.status(210).json(savedMoodBoard);
    })
    .catch((error) => {
        console.log("Error creating MoodBoard", error)
        res.status(500).send("Error creating MoodBoard")
    });
});

app.put("")

