const express = require('express');
const reviewController = require('../controllers/reviewController');
const auth = require('../middlewares/auth'); // Import your authentication middleware

const router = express.Router();

router.post('/', auth, reviewController.createReview); // Apply the middleware here
router.get('/', reviewController.getReviews);
router.get('/:id', reviewController.getReview);
router.put('/:id', auth, reviewController.updateReview); // And here, if necessary

// Get all reviews for a specific coach
router.get('/coach/:coachId', reviewController.getReviewsByCoachId);

module.exports = router;
