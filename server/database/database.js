require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {  })
  .then(() => {
    console.log("Connected to Mongo Database on Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
//models
require("./category");
require("./Recipe");
