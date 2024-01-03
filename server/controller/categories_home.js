require("../database/database");

const Category = require("../database/category");

const categories_home = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("categories", { title: "Categories", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = categories_home;
