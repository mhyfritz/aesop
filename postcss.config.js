const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["*.html", "*.njk", "_includes/**/*.html", "_includes/**/*.njk"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    require("autoprefixer"),
    require("cssnano")
  ]
};
