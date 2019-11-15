const path = require("path");
const rollup = require("rollup");
const config = require("../../rollup.config");

const entry = path.join(__dirname, "_includes", "js", "index.js");
config.input = { input: entry };

async function build() {
  const bundle = await rollup.rollup(config.input);
  const { output } = await bundle.generate(config.output);
  // will only work for a single chunk and no assets
  return output[0].code;
}

module.exports = class {
  data() {
    const entry = path.join(__dirname, "_includes", "js", "index.js");
    const permalink = path.join("js", config.output.file);
    return { entry, permalink };
  }

  render() {
    return build();
  }
};
