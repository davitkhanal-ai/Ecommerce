const getRecipe = async (req, res) => {
  res.render("index", { title: "Recipe - by S" });
};

module.exports = getRecipe;
