const mongoose = require('mongoose');

const moodBoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  savedArtworks: { type: Array, required: true },
});

const MoodBoard = mongoose.model('MoodBoard', moodBoardSchema);

module.exports = MoodBoard;
