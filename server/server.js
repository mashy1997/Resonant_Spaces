const express = require('express');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

const url = 'mongodb://localhost:27017';
const dbName = 'resonant_spaces';


mongoose.connect('mongodb://localhost:27017/resonant_spaces').then( () => {

const moodBoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  savedArtworks: { type: Array, required: true },
});

const MoodBoard = mongoose.model('MoodBoard', moodBoardSchema);



MongoClient.connect(url, { useUnifiedTopology: true }) //refactor this so mongoclient (NONE) use mongoose clients instead
  .then((client) => {

    const db = client.db(dbName);
    const moodboardsCollection = db.collection('moodboards');
    const moodboardsRouter = createRouter(moodboardsCollection, MoodBoard);
    app.use('/api/moodboards', moodboardsRouter);

    app.listen(9001, function () {
      console.log('App running on port 9001');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



})

