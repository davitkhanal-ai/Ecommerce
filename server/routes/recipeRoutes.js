const express = require("express");
const recipeRouter = express.Router();
const getRecipe = require("../controller/getRecipe");

//all routes
recipeRouter.get("/recipe", getRecipe);

module.exports = recipeRouter;
