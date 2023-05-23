const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const asyncHandler = require('../middlewares/asyncHandler');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

// Register a new user
router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    // Add more validation rules as needed
  ],
  asyncHandler(userController.registerUser)
);

// Login a user
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  asyncHandler(userController.loginUser)
);
// Redirect the user to the Discord authentication page
router.get('/auth/discord', passport.authenticate('discord'));

// The callback route that Discord will redirect to after the user accepts/rejects
router.get('/auth/discord/callback', 
    passport.authenticate('discord', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');  // or wherever you want
    }
);
// Get user profile
router.get('/profile', auth, asyncHandler(userController.getUserProfile));

// Update user profile
router.put(
  '/profile',
  auth,
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    // Add more validation rules as needed
  ],
  asyncHandler(userController.updateUserProfile)
);

// Delete a user
router.delete('/user', auth, asyncHandler(userController.deleteUser));

module.exports = router;
