const Review = require('../models/reviewModel');
const Event = require('../models/Event');
const User = require('../models/User');
const UserProfile = require('../models/userProfile'); // Ensure correct model is imported

// Controller to create a new review
const createReview = async (req, res) => {
  try {
    const { eventId } = req.params; // Get eventId from URL params
    const { rating, comment } = req.body;

    // Validate if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Create and save the review
    const newReview = new Review({
      eventId,
      rating,
      comment,
      userId: req.user.id, 
    });

    await newReview.save();
    res.status(201).json({ message: 'Review created successfully', review: newReview });
  } catch (error) {
    console.error('Error creating review:', error.message);
    res.status(500).json({ message: 'Error creating review', error: error.message });
  }
};

// Controller to get all reviews for a specific event
const getReviews = async (req, res) => {
  const { eventId } = req.params;
  try {
    const reviews = await Review.find({ eventId });
    console.log('====================================');
    
    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found for this event' });
    }
    console.log('====================================');

    res.status(200).json({ message: 'Reviews fetched successfully', reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
};

const getUsername = async (req, res) => {
  try {
    console.log("hit routr", req.user.id);
    const user = await User.findById(req.user.id); // Ensure correct model is used
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user); // Return user data directly
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = {
  createReview,
  getReviews,
  getUsername
};
