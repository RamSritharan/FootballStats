const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  dbName: "Players",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
