const Game = require('../models/Game');

// Create a new game
exports.createGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all games
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get a game by ID
exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({msg: 'Game not found'});
    res.json(game);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Game not found' });
    }
    res.status(500).send('Server error');
  }
};

// Update a game
exports.updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!game) return res.status(404).json({msg: 'Game not found'});
    res.json(game);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Game not found' });
    }
    res.status(500).send('Server error');
  }
};

// Delete a game
exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndRemove(req.params.id);
    if (!game) return res.status(404).json({msg: 'Game not found'});
    res.json({msg: 'Game deleted'});
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Game not found' });
    }
    res.status(500).send('Server error');
  }
};
