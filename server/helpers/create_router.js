const express = require('express');
const router = express.Router();

const createRouter = function (collection, MoodBoard) {

    
    // Fetching all moodboards
    router.get("/", (req, res) => {
        collection.find()
            .toArray()
            .then((moodboards) => {
                res.status(200).json(moodboards);
            })
            .catch((error) => {
                console.log("Error fetching moodboards", error);
                res.status(500).send("Error fetching moodboards");
            });
    });

    // Creating a new moodboard
    router.post("/", (req, res) => {
        const { name, savedArtworks } = req.body;
        console.log("request body below ")
        console.log(req.body )

        if (!name || !savedArtworks) {
            return res
                .status(400)
                .json({ message: "Name and saved artworks are required for a moodboard" });
        }

        const moodBoard = new MoodBoard({ name, savedArtworks });
        
        moodBoard
        .save()
        .then((savedMoodBoard) => {
            res.status(201).json(savedMoodBoard);
        })
        .catch((error) => {
            console.log("Error creating MoodBoard", error);
            res.status(500).send("Error creating MoodBoard");
        });
      
           
    });

    //Updating a moodboard
    router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, savedArtworks } = req.body;

    if (!name || !savedArtworks) {
        return res
        .status(400)
        .json({ message: "Name and saved artworks are required for a moodboard" });
    }

    MoodBoard.findByIdAndUpdate(
        id,
        { name, savedArtworks },
        { new: true }
    )
        .then((updatedMoodBoard) => {
        if (!updatedMoodBoard) {
            return res.status(404).json({ message: "MoodBoard not found" });
        }
        res.status(200).json(updatedMoodBoard);
        })
        .catch((error) => {
        console.log("Error updating MoodBoard", error);
        res.status(500).send("Error updating MoodBoard");
        });
    });
    

    // Deleting a single artwork from a moodboard
    router.delete("/:moodboardId/artwork/:artworkId", (req, res) => {
    
        const { moodboardId, artworkId } = req.params;
    
        MoodBoard.findById(moodboardId)
        .then((moodboard) => {
            if (!moodboard) {
            return res.status(404).json({ message: "MoodBoard not found" });
            }
    
            // Find the index of the artwork in the savedArtworks array
            const artworkIndex = moodboard.savedArtworks.findIndex(
            (artwork) => artwork.id === artworkId
            );
    
            if (artworkIndex === -1) {
            return res.status(404).json({ message: "Artwork not found in MoodBoard" });
            }
    
            // Remove the artwork from the savedArtworks array
            moodboard.savedArtworks.splice(artworkIndex, 1);
    
            // Save the updated moodboard
            moodboard
            .save()
            .then((updatedMoodBoard) => {
                res.status(200).json(updatedMoodBoard);
            })
            .catch((error) => {
                console.log("Error deleting artwork from MoodBoard", error);
                res.status(500).send("Error deleting artwork from MoodBoard");
            });
        })
        .catch((error) => {
            console.log("Error finding MoodBoard", error);
            res.status(500).send("Error finding MoodBoard");
        });
  });

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const updatedData = req.body;
//     delete updatedData._id;

//     collection
//     .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
//     .then(result => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res.status(500);
//       res.json({ status: 500, error: err });
//     });
//   });

    //     MoodBoard.findOneAndUpdate(
    //         { _id: id },
    //         { name, savedArtworks },
    //         { new: true }
    //     )
    //         .then((updatedMoodBoard) => {
    //             res.status(200).json(updatedMoodBoard);
    //         })
    //         .catch((error) => {
    //             console.log("Error updating MoodBoard", error);
    //             res.status(500).send("Error updating MoodBoard");
    //         });
    // });

    // Deleting a moodboard 
    router.delete("/:id", (req, res) => {
        const { id } = req.params;

        MoodBoard.findOneAndDelete({ _id: id })
            .then(() => {
                res.sendStatus(204);
            })
            .catch((error) => {
                console.log("Error deleting MoodBoard", error);
                res.status(500).send("Error deleting MoodBoard");
            });
    });

    return router;
};

module.exports = createRouter;

