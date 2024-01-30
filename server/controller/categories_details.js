require("../database/database");


const Recipe = require("../database/Recipe");

const categories_details = async (req, res) => {
  try {
    const limitNumber = 5;
    const categorybyId = req.params.id;
    const categoriesbyID = await Recipe.find({'category': categorybyId }).limit(limitNumber);

    res.render("categories", { title: "Categories", categoriesbyID });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = categories_details;
