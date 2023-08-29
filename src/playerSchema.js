const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  socket: {
    type: String,
    default: 0,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  health: {
    type: Number,
    default: 3,
  },
  inventory: {
    type: Array,
    default: [],
  },
  weapon: {
    type: Array,
    default: [],
  },
  armor: {
    type: Array,
    default: [],
  },
  artifact: {
    type: Array,
    default: [],
  },
  currency: {
    type: Number,
    default: 0,
  }
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;