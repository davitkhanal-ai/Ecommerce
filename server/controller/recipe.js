require("../database/database");

const Recipe = require("../database/Recipe");

const recipe_home = async (req, res) => {
  try {
    const limitNumber = 5;
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber); // ned to sort by created at here

    const thai = await Recipe.find({ category: "Thai" }).limit(limitNumber);
    const american = await Recipe.find({ category: "American" }).limit(limitNumber);
    const chinese = await Recipe.find({ category: "Chinese" }).limit(limitNumber);

    const food = { latest,thai,american,chinese };
    res.render("recipe", { title: "recipe", latest, food });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = recipe_home;
