require("../database/database");

const Recipe = require("../database/Recipe");

const recipe_details = async (req, res) => {
  try {

    let recipe_id = req.params.id;
    
    const recipe = await  Recipe.findById(recipe_id)
   res.render("single_recipe",{ title: "Yours Recipe", recipe })
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = recipe_details;
