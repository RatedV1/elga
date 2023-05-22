const Coach = require('../models/Coach');
const { validationResult } = require('express-validator');
const asyncHandler = require('../middlewares/asyncHandler');

// Get all coaches
exports.getAllCoaches = asyncHandler(async (req, res) => {
  const coaches = await Coach.find();
  res.json(coaches);
});

// Get a coach by ID
exports.getCoachById = asyncHandler(async (req, res) => {
  const coach = await Coach.findById(req.params.id);
  if (!coach) {
    return res.status(404).json({ msg: 'Coach not found' });
  }
  res.json(coach);
});

// Create a new coach
exports.createCoach = asyncHandler(async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, expertise, coachingService, bio, profilePicture, filters, socialMedia, faqs, username } = req.body;
  
      console.log('Creating coach...');
      console.log('User ID:', req.user.id);
      console.log('User Type:', req.user.type);
      console.log('User Name:', req.user.username);
  
      const coach = new Coach({
        name,
        expertise,
        coachingService,
        bio,
        profilePicture,
        filters,
        socialMedia,
        faqs,
        username,
        user: req.user.id,
      });
  
      await coach.save();
  
      console.log('Coach created:', coach);
  
      res.status(201).json(coach);
    } catch (err) {
      console.error('Error creating coach:', err);
      res.status(500).json({ msg: 'Server error' });
    }
  });
  
  
  

// Update coach info
exports.updateCoach = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, expertise, bio, profilePicture, filters, socialMedia, faqs, username } = req.body;

  let coach = await Coach.findById(req.params.id);
  if (!coach) {
    return res.status(404).json({ msg: 'Coach not found' });
  }

  // Check if the authenticated user is the coach or an admin
  if (req.user.id !== coach.user.toString() && req.user.type !== 'Admin') {
    return res.status(401).json({ msg: 'Not authorized to update this coach' });
  }
console.log('Authenticated user ID:', req.user.id);
console.log('Coach user ID:', coach.user.toString());
console.log('Comparison result:', req.user.id !== coach.user.toString());


  coach.name = name;
  coach.expertise = expertise;
  coach.bio = bio;
  coach.profilePicture = profilePicture;
  coach.filters = filters;
  coach.socialMedia = socialMedia;
  coach.faqs = faqs;
  coach.username = username;
  // Only allow admins to update the gameId field
    if (req.user.type === 'Admin') {
        coach.gameId = gameId;
    }

  await coach.save();

  res.json(coach);
});
