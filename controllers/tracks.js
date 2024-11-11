const express = require('express');
const router = express.Router();
const Track = require('../modules/track');


router.post('/', async (req, res) => {
  try {
    const track = new Track(req.body);
    await track.save();
    res.status(201).send(track);
  } 
  catch (error) {
    res.status(500).send({ error: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).send(tracks);
  } 
  catch (error) {
    res.status(500).send({ error: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) {
      return res.status(404).send({ error: 'Track not found' });
    }
    res.status(200).send(track);
  } 
  catch (error) {
    res.status(500).send({ error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!track) {
      return res.status(404).send({ error: 'Track not found' });
    }
    res.status(200).send(track);
  } 
  catch (error) {
    res.status(500).send({ error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);
    if (!track) {
      return res.status(404).send({ error: 'Track not found' });
    }
    res.status(200).send(track);
  } 
  catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
