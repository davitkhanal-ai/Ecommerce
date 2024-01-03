const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const reciperRouter = require("./server/routes/recipeRoutes");

const app = express();
const port = process.env.PORT || 5000;

// for db connection

// requiring the dotenv
require("dotenv").config();

// Middleware
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(__dirname + "/public"));
app.use(expressLayouts);
app.set("layout", path.join(__dirname, "views/layouts/main.ejs"));
app.set("view engine", "ejs");

// Routes
app.use("/", reciperRouter);

// Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
