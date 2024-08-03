const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// @route   POST /events
// @desc    Create a new event
// @access  Public
router.post('/', async (req, res) => {
  const { name, date, location, description } = req.body;

  if (!name || !date || !location || !description) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newEvent = new Event({
      name,
      date,
      location,
      description
    });

    const event = await newEvent.save();

    res.status(201).json({
      message: 'Event created successfully',
      event
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /events
// @desc    Get all events
// @access  Public
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /events/:id
// @desc    Get an event by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /events/:id
// @desc    Delete an event by ID
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id); // Use findByIdAndDelete

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    res.status(200).json({ msg: 'Event deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
