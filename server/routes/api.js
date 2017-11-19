const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;

let db;
const port = process.env.PORT || 3000;

router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => {
    db.collection('posts').find({}).toArray((err, docs) => {
        if (err) throw err;

        res.status(200).json(docs);
    });
});

MongoClient.connect('mongodb://localhost:27017/posts', (err, database) => {
    if (err) throw err;

    console.log('Connected to the database.');
    db = database;
});

module.exports = router;
