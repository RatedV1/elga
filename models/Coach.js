const mongoose = require('mongoose');

const CoachSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide a name for the coach'],
  },
  expertise: {
    type: String,
    required: [true, 'Please provide the coach\'s area of expertise'],
  },
  coachingService: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CoachingService',
    required: [true, 'Please provide the coach\'s coaching service'],
  },
  bio: {
    type: String,
    required: [true, 'Please provide a bio for the coach'],
  },
  profilePicture: {
    type: String,
    required: [true, 'Please provide the URL of the coach\'s profile picture'],
  },
  filters: {
    type: [String],
    required: [true, 'Please provide the coach\'s filters'],
  },
  socialMedia: {
    type: {
      twitter: String,
      instagram: String,
      facebook: String,
    },
  },
  faqs: [
    {
      question: String,
      answer: String,
    },
  ],
  username: {
    type: String,
    required: [true, 'Please provide a username for the coach\'s URL'],
    unique: true,
  },
});

const Coach = mongoose.model('Coach', CoachSchema);

module.exports = Coach;
