const Coach = require('../models/Coach');
const { validationResult } = require('express-validator');
const asyncHandler = require('../middlewares/asyncHandler');
const service = require('../models/Service');
const User = require('../models/User'); // assuming this is your User model

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
  
exports.createCoach = asyncHandler(async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, expertise, level, email, service, bio, coverPic, profilePicture, filters, socialMedia, faqs, username,game } = req.body;

    console.log('Creating coach...');
    console.log('Name:', name);
    console.log('Expertise:', expertise);
    console.log('Email:', email);
    console.log('Service:', Service);
    console.log('Bio:', bio);
    console.log('Profile Picture:', profilePicture);
    console.log('Cover Picture:', coverPic);
    console.log('Filters:', filters);
    console.log('Social Media:', socialMedia);
    console.log('FAQs:', faqs);
    console.log('Username:', username);
  
    const coach = new Coach({
      name,
      expertise,
      service, // Changed from 'Service' to 'service'
      bio,
      profilePicture,
      coverPic,
      filters,
      socialMedia,
      faqs,
      username,
      level,
      email,
      game, // the game id
      user: req.user.id,
    });
    // Find the user document and update the user type to Coach
    const user = await User.findById(req.user.id);
    if (user) {
      user.type = 'Coach';  // or whatever string you use to signify a coach
      await user.save();
    } else {
      console.error(`User not found with id ${req.user.id}`);
      return res.status(404).json({ msg: 'User not found' });
    }
    if (user.type !== 'Coach') {
      console.error(`Failed to update user type for id ${req.user.id}`);
      return res.status(500).json({ msg: 'Failed to update user type' });
    }
    
    await coach.save();
      await coach.save();
  
      console.log('Coach created:', coach);
  
      res.status(201).json(coach);
    } catch (err) {
      console.error('Error creating coach:', err);
      res.status(500).json({ msg: 'Server error' });
    }
  });
  
  
  
// Get coach ID by email
exports.getCoachIdByEmail = asyncHandler(async (req, res) => {
  const email = req.params.email;
  console.log('Requested email:', email);

  const coach = await Coach.findOne({ email });
  console.log('Retrieved coach:', coach);

  if (!coach) {
    return res.status(404).json({ msg: 'Coach not found' });
  }

  res.json({ coachId: coach._id });
});

// Get coach level
exports.getCoachLevel = asyncHandler(async (req, res) => {
  const coach = await Coach.findById(req.params.id);
  if (!coach) {
    return res.status(404).json({ msg: 'Coach not found' });
  }
  res.json({ level: coach.level });
});

// Update coach info
exports.updateCoach = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log('Received data:', req.body);

  const { name, expertise, level, bio, coverPic, profilePicture, filters, socialMedia, faqs, username, game } = req.body;

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
  coach.coverPic = coverPic;
  coach.filters = filters;
  coach.socialMedia = socialMedia;
  coach.faqs = faqs;
  coach.username = username;
  coach.level = level;
  coach.game = game; // the game id

  await coach.save();

  res.json(coach);
});
