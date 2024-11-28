const Player = require("../models/player");

async function index(req, res) {
  let allPlayers = Player.find({}).sort({});
  res.status(200).json(allPlayers);
}
