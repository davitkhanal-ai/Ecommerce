const express = require("express");
const recipeRouter = express.Router();
const home = require("../controller/home");
const categories_home = require("../controller/categories_home");
const aboutMe = require("../controller/aboutme");
const versionTXT = require("../controller/version");
const recipe_home = require("../controller/recipe");
const recipe_details = require("../controller/recipe_details");
const Category_details = require("../controller/categories_details");


//all routes for get
recipeRouter.get("", home);
recipeRouter.get("/categories", categories_home);
recipeRouter.get("/categories/:id",Category_details)
recipeRouter.get("/recipe", recipe_home);
recipeRouter.get("/recipe/:id",recipe_details)
recipeRouter.get("/about", aboutMe);
recipeRouter.get("/version.txt", versionTXT);

module.exports = recipeRouter;
