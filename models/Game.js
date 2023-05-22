const mongoose = require('mongoose');

const GameFilterSchema = new mongoose.Schema({
  filterName: {
    type: String,
    required: [true, 'Please provide a name for the filter'],
  },
  filterOptions: {
    type: [String], 
    required: [true, 'Please provide options for the filter'],
  },
});

const GameSchema = new mongoose.Schema({
  gameId: {
    type: String,
    required: [true, 'Please provide a game id'],
    unique: true,
  },
  gameName: {
    type: String,
    required: [true, 'Please provide a name for the game'],
  },
  gameTitle: {
    type: String,
    required: [true, 'Please provide a title for the game'],
  },
  gameDescription: {
    type: String,
    required: [true, 'Please provide a description for the game'],
  },
  friendlyUrl: {
    type: String,
    required: [true, 'Please provide a friendly URL for the game'],
    unique: true,
  },
  filters: [GameFilterSchema],
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
