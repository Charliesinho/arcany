const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  socket: {
    type: String,
    default: 0,
  },
  area: {
    type: String,
    default: "Castle Side",
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  health: {
    type: Number,
    default: 6,
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
  souls: {
    type: Array,
    default: [],
  },
  artifacts: {
    type: Array,
    default: [],
  },
  scores: {
    type: Array,
    default: [
      {
        mushroomTrial: 0,
        restfieldTrial: 0,
      }
    ],
  },
  questsOngoing: {
    type: Array,
    default: [],
  },
  questsCompleted: {
    type: Array,
    default: [],
  },
  currency: {
    type: Number,
    default: 0,
  },
  fishing: {
    type: Number,
    default: 0,
  },
  cooking: {
    type: Number,
    default: 0,
  },
  crafting: {
    type: Number,
    default: 0,
  },
  combat: {
    type: Number,
    default: 0,
  },
  enchanting: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 0,
  },
  access: {
    type: Array,
    default: [
      {
        restfieldPath: false,
        slimeForestPath: false,
      }
    ],
  },
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;