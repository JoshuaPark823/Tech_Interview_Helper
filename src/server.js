require('dotenv').config();

const express = require('express');
const app = express();

// TODO: MongoDB Set Up
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.error('Database Connected Successfully.'));

app.use(express.json());

// TODO: Clean, temp questions endpoint
const dataController = require('./api/questions-controller');
app.use('/api/questions', dataController);

app.listen(3000, () => console.log('App Server listening on http://localhost:3000'));