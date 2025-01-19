const Event = require('../models/Event');

// Controller to handle event creation
console.log("jhgfh");
const createEvent = async (req, res) => {
  const { title, description, date, location, category } = req.body;

  if (!title || !description || !date || !location || !category) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  console.log('====================================');
  try {
    const newEvent = new Event({
      title,
      description,
      date,
      location,
      category,
      user: req.user.id,

    });
    console.log('==evbfgnh==================================');

    console.log("35");
    const savedEvent = await newEvent.save(); // Use save() instead of create()
    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      event: savedEvent,
    });
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Controller to fetch all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getEvent = async (id, res) => {
  // const id  = id.params; // Access id from id.params for a GET iduest
  console.log("id.params", id);

  try {
    const event = await Event.findById(id); // Pass id directly to findById
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = { createEvent, getEvents, getEvent };
