const express = require('express');
const { body } = require('express-validator');
const coachController = require('../controllers/coachController');
const auth = require('../middlewares/auth');
const asyncHandler = require('../middlewares/asyncHandler');

const router = express.Router();

// Get all coaches
router.get('/', coachController.getAllCoaches);

// Get a coach by ID
router.get('/:id', coachController.getCoachById);

// Create a new coach
router.post(
  '/',
  [
    auth,
    body('name').notEmpty().withMessage('Name is required'),
    body('expertise').notEmpty().withMessage('Expertise is required'),
    // Add more validation rules as needed
  ],
  coachController.createCoach
);

// Update coach info
router.put(
  '/:id',
  [
    auth,
    body('name').notEmpty().withMessage('Name is required'),
    body('expertise').notEmpty().withMessage('Expertise is required'),
    // Add more validation rules as needed
  ],
  coachController.updateCoach
);

module.exports = router;
