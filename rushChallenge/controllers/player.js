const Player = require("../models/player");
const { Parser } = require("json2csv");

let cache;

async function index(req, res) {
  try {
    let field = req.query.sortedValue || "Team";
    let filteredPlayer = {};
    let order = req.query.order || "desc";

    if (req.query.player != null) {
      filteredPlayer = { Player: [req.query.player] };
    }

    let players = await Player.find(filteredPlayer).sort({
      [field]: order,
    });

    cache = players;
    res.status(200).json(players);
    // const csv =
  } catch (err) {
    console.log(err);

    res.status(500).json("Filter error");
  }
}

async function downloadCSV(req, res) {
  const players = cache;
  const fields = [
    "Player",
    "Team",
    "Pos",
    "Att",
    "Att/G",
    "Yds",
    "Avg",
    "Yds/G",
    "TD",
    "Lng",
    "1st",
    "1st%",
    "20+",
    "40+",
    "FUM",
  ];

  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(players);

  res.header("Content-Type", "text/csv");
  res.attachment("players.csv");
  res.send(csv);
}

module.exports = { index, downloadCSV };
