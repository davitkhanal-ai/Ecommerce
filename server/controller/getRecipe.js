const getRecipe = async (req, res) => {
  res.render("index", { title: "Recipe - by Me" });
};

module.exports = getRecipe;
