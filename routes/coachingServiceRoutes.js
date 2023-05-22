const express = require('express');
const router = express.Router();
const coachingServiceController = require('../controllers/coachingServiceController');

router.get('/', coachingServiceController.getAllCoachingServices);
router.post('/', coachingServiceController.createCoachingService);
router.put('/:id', coachingServiceController.updateCoachingService);
router.delete('/:id', coachingServiceController.deleteCoachingService);

module.exports = router;
