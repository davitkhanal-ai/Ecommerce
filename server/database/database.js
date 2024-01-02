const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB Connection erro"));
db.once("open", function () {
  console.log("connected to DB");
});

//models
require("./category");
require('./Recipe');


