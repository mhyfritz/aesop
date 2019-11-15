const path = require("path");
const rollup = require("rollup");
const config = require("../../rollup.config");

const entry = path.join(__dirname, "_includes", "js", "index.js");
config.input = entry;

async function build() {
  const bundle = await rollup.rollup({
    input: config.input,
    plugins: config.plugins
  });
  const { output } = await bundle.generate(config.output);
  // will only work for a single chunk and no assets
  return output[0].code;
}

module.exports = class {
  data() {
    const entry = path.join(__dirname, "_includes", "js", "index.js");
    const permalink = path.join("js", "bundle.min.js");
    return { entry, permalink };
  }

  render() {
    return build();
  }
};
