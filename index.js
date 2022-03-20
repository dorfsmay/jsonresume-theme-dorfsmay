const fs = require("fs");
const path = require("path");
const sass = require("sass");
const handlebars = require("handlebars");

function render(resume) {
  const PARTIALS_DIR = path.join(__dirname, "partials");
  fs.readdirSync(PARTIALS_DIR).map((fn) => {
    const matches = /^([^.]+).hbs$/.exec(fn);
    if (matches) {
      const name = matches[1];
      const content = fs.readFileSync(path.join(PARTIALS_DIR, fn), "utf8");
      handlebars.registerPartial(name, content);
    }
  });

  const template = fs.readFileSync(path.join(__dirname, "resume.hbs"), "utf-8");
  const css = sass.compile(path.join(__dirname, "style.scss")).css;
  console.log(css);
  return handlebars.compile(template)({ resume: resume, css: css });
}

module.exports = {
  render: render,
};
