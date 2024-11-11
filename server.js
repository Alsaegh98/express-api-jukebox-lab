const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')
const trackRoutes = require('./controllers/tracks');

const app = express();

app.use(express.json());

app.use(cors())

app.use('/tracks', trackRoutes);


mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})


  app.listen(3000, () => {
    console.log('The express app is ready!')
})
