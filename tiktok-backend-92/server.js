import express from 'express';
import mongoose from 'mongoose';

import data from './data.js';
import Videos from './dbModel.js';

// app config

const app = express();
const port = 9000;

//middlewares
app.use(express.json());
app.use((re, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'), 
    res.setHeader('Access-Control-Allow-Header', '*'),
    next();
});

// DB config
const connection_url = 
    "mongodb+srv://tmott:G5nscd13PgRAvHfW@cluster0.x2epi6f.mongodb.net/tiktokdb?retryWrites=true&w=majority";

    mongoose.connect(connection_url, { useNewUrlParser: true });
    mongoose.connect(connection_url, { useCreateIndex: true });
    mongoose.connect(connection_url, { useUnifiedTopology: true });

// api endpoints

app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/v1/posts', (req, res) => res.status(200).send(data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts', (req, res) => {
    // POST request is to ADD DATA to the database
    //It will let us ADD a video DOCUMENT to the videos COLLECTION
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));