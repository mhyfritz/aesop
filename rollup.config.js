const resolve = require("rollup-plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");
const babel = require("rollup-plugin-babel");

module.exports = {
  output: {
    format: "iife"
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
