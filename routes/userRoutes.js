const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

// Register a new user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Get user profile
router.get('/:type/profile', auth, userController.getUserProfile);

// Update user profile
router.put('/:type/profile', auth, userController.updateUserProfile);

// Delete a user
router.delete('/:type/user', auth, userController.deleteUser);

module.exports = router;
