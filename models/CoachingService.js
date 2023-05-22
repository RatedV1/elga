const mongoose = require('mongoose');

const CoachingServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the coaching service'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the coaching service'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for the coaching service'],
  },
  // Add any other fields you need for your coaching service schema
});

const CoachingService = mongoose.model('CoachingService', CoachingServiceSchema);

module.exports = CoachingService;
