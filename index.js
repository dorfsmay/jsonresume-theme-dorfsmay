const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

function render(_resume) {
  const resumeTemplate = fs.readFileSync(
    path.join(__dirname, "resume.hbs"),
    "utf-8"
  );
  return Handlebars.compile(resumeTemplate)({});
}

module.exports = {
  render: render,
};
