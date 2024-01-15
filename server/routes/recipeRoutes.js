const express = require("express");
const recipeRouter = express.Router();
const home = require("../controller/home");
const categories_home = require("../controller/categories_home");
const aboutMe = require("../controller/aboutme");
const versionTXT = require("../controller/version");

//all routes for get
recipeRouter.get("", home);
recipeRouter.get("/categories", categories_home);
recipeRouter.get("/recipe", recipe);
recipeRouter.get("/about", aboutMe);
recipeRouter.get("/version.txt", versionTXT);

module.exports = recipeRouter;
