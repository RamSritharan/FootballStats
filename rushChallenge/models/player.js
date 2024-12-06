const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    // _id: { type: Object, required: true },
    Player: { type: String, required: true }, // Player name
    Team: { type: String, required: true }, // Team abbreviation
    Pos: { type: String, required: true }, // Position
    Att: { type: Number, required: true, default: 0 }, // Attempts
    "Att/G": { type: Number, required: true, default: 0 }, // Attempts per game
    Yds: { type: Number, required: true, default: 0 }, // Total yards
    Avg: { type: Number, required: true, default: 0 }, // Average yards
    "Yds/G": { type: Number, required: true, default: 0 }, // Yards per game
    TD: { type: Number, required: true, default: 0 }, // Touchdowns
    Lng: { type: String, required: true }, // Longest play (e.g., "7" or "7T")
    "1st": { type: Number, required: true, default: 0 }, // First downs
    "1st%": { type: Number, required: true, default: 0 }, // First down percentage
    "20+": { type: Number, required: true, default: 0 }, // Plays of 20+ yards
    "40+": { type: Number, required: true, default: 0 }, // Plays of 40+ yards
    FUM: { type: Number, required: true, default: 0 }, // Fumbles
  },
  { timestamps: true }
  // { collection: "Players" } // Optional timestamps for createdAt and updatedAt
);

const Player = mongoose.model("Player", playerSchema, "Players");
module.exports = Player;
