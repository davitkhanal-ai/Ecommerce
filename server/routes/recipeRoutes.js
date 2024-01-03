const express = require("express");
const recipeRouter = express.Router();
const home = require("../controller/home");
const categories_home = require("../controller/categories_home");

//all routes
recipeRouter.get("", home);
recipeRouter.get("/categories", categories_home);

module.exports = recipeRouter;
