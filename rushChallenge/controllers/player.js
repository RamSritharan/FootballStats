const Player = require("../models/player");
const mongoose = require("mongoose");

async function index(req, res) {
  try {
    const players = await Player.find({});
    console.log("hello", players);
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json("No data exists in database");
  }
}

module.exports = { index };
