const path = require("path");
const siteRoot = path.join(__dirname, "src", "site");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    path.join(siteRoot, "*.html"),
    path.join(siteRoot, "*.njk"),
    path.join(siteRoot, "_includes", "**", "*.html"),
    path.join(siteRoot, "_includes", "**", "*.njk")
  ],
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
