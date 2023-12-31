require("../database/database");

const Category = require("../database/category");
const Recipe = require("../database/Recipe");

const home = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    const food = { latest };
    res.render("index", { title: "Welcome to S", categories, food });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = home;
