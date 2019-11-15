const { terser } = require("rollup-plugin-terser");
const babel = require("rollup-plugin-babel");

module.exports = {
  output: {
    file: "bundle.min.js",
    format: "iife"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
