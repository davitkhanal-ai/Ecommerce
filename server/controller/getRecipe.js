const getRecipe = async (req, res) => {
  res.render("index", { title: "Home" });
};

module.exports = getRecipe;
