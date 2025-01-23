const express = require('express');
const { createEvent, getEvents, getEvent } = require('../controllers/eventController');
const { createReview, getReviews } = require('../controllers/reviewController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new event
router.post('/create', authenticateToken, (req, res, next) => {
  console.log('POST create route hit');
  next();
}, createEvent);

// Route to get all events
router.get('/all', authenticateToken, (req, res) => {
  console.log('GET /all route hit');
  getEvents(req, res);
});

// Route to get a specific event
router.get('/event/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  console.log("req.params", id);
  getEvent(id, res); // Pass only the id to the function
});

// Route to create a new review
router.post('/reviews/:eventId', authenticateToken, createReview);

// Route to get all reviews for a specific event
router.get('/reviews/:eventId', authenticateToken, getReviews);

module.exports = router;
