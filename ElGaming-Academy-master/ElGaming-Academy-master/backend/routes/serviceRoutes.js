const express = require('express');
const { body } = require('express-validator');
const serviceController = require('../controllers/serviceController');
const auth = require('../middlewares/auth');
const asyncHandler = require('../middlewares/asyncHandler');

const router = express.Router();

// Create a new service for a coach
router.post(
  '/:id/service',
  [
    auth,
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('duration').notEmpty().withMessage('Duration is required'),
    body('price').notEmpty().withMessage('Price is required'),
  ],
  serviceController.createService
);

// Update a service for a coach
router.put(
  '/:id/service/:serviceId',
  [
    auth,
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('duration').notEmpty().withMessage('Duration is required'),
    body('price').notEmpty().withMessage('Price is required'),
  ],
  serviceController.updateService
);

// Delete a service for a coach
router.delete('/:id/service/:serviceId', auth, serviceController.deleteService);

module.exports = router;
