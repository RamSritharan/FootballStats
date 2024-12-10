var express = require("express");
var router = express.Router();
const playerCtrl = require("../controllers/player");

/* GET home page. */
router.get("/players", playerCtrl.index);
router.get("/players/downloadCSV", playerCtrl.downloadCSV);

module.exports = router;
