const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const config = require("../../postcss.config");

const inputFileName = "index.css";
const outputFileName = "bundle.css";

module.exports = class {
  data() {
    const filePath = path.join(__dirname, "_includes", "css", inputFileName);
    const css = fs.readFileSync(filePath);
    const permalink = path.join("css", outputFileName);

    return { css, filePath, permalink };
  }

  async render({ css, filePath }) {
    return await postcss(config.plugins)
      .process(css, { from: filePath })
      .then(result => result.css);
  }
};
