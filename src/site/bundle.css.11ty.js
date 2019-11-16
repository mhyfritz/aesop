const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const config = require("../../postcss.config");

const entry = path.join(__dirname, "_includes", "css", "index.css");

module.exports = class {
  data() {
    const css = fs.readFileSync(entry);
    const permalink = path.join("css", "bundle.min.css");

    return { css, entry, permalink };
  }

  async render({ css, entry }) {
    return await postcss(config.plugins)
      .process(css, { from: entry })
      .then(result => result.css);
  }
};
