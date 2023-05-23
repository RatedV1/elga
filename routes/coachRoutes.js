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

// Get coach level
router.get('/:id/level', coachController.getCoachLevel);
// Update coach info
router.put(
  '/:id',
  [
    auth,
    body('name').notEmpty().withMessage('Name is required'),
    body('expertise').notEmpty().withMessage('Expertise is required'),
    // Add more validation rules as needed
    body('gameId').if(body('gameId').exists()).custom((value, { req }) => {
      if (req.user.type !== 'Admin') {
        throw new Error('Not authorized to update gameId');
      }
      return true;
    }),
  ],
  coachController.updateCoach
);
// Get coach ID by email
router.get('/email/:email', auth, coachController.getCoachIdByEmail);

module.exports = router;
