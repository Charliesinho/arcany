const mongoose = require("mongoose");

const WorldSchema = new mongoose.Schema({
  areaName: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  biome: {
    type: String,
  },
  playerPos: {
    type: Object,
    default: {},
  },
  playerMade: {
    type: Boolean,
    default: true,
  },
  colliders: {
    type: Array,
    default: [],
  },
  enemies: {
    type: Array,
    default: [],
  },
  objects: {
    type: Array,
    default: [],
  },
  colliders: {
    type: Array,
    default: [],
  },
});

const World = mongoose.model("World", WorldSchema);

module.exports = World;