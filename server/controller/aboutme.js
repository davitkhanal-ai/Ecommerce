const aboutMe = async (req, res) => {
  try {
    const data = {
      title: "About Me",
      name: "Davit khanal",
      githubLink: "https://github.com/davitkhanal-ai",
      linkedinLink: "https://www.linkedin.com/in/davitkhanal/",
    };
    res.render("aboutme", data);
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = aboutMe;
