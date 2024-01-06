require("../database/database");

const Recipe = require("../database/Recipe");

const recipe_home = async (req, res) => {
  try {
    const limitNumber = 5;
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber); // ned to sort by created at here

    const food = { latest };
    res.render("recipe", { title: "recipe", latest, food });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = recipe_home;
