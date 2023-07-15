const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

const url = 'mongodb://localhost:27017';
const dbName = 'resonant_spaces';

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db(dbName);
    const moodboardsCollection = db.collection('moodboards');
    const moodboardsRouter = createRouter(moodboardsCollection);
    app.use('/api/moodboards', moodboardsRouter);

    app.listen(9001, function () {
      console.log('App running on port 9001');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });