const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = newSchema({
  player: String,
  team: String,
  pos: String,
  att: Number,
  attG: Number,
  Yds: Number,
  Avg: String,
  Ydsg: Number,
  TD: Number,
  Lng: String,
  First: Number,
  FirstPercentage: Number,
  TwentyPlus: Number,
  FortyPlus: Number,
  FUM: Number,
});

module.exports = mongoose.model("player", playerSchema);
