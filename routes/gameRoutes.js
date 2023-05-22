const express = require('express');
const gameController = require('../controllers/gameController');
const auth = require('../middlewares/auth');

const router = express.Router();

// Create a new game
router.post('/', auth, gameController.createGame);

// Get all games
router.get('/', gameController.getAllGames);

// Get a game by ID
router.get('/:id', gameController.getGameById);

// Update a game
router.put('/:id', auth, gameController.updateGame);

// Delete a game
router.delete('/:id', auth, gameController.deleteGame);

module.exports = router;
