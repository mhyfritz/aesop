const fs = require("fs");
const path = require("path");
const { splitExt } = require("./utils.js");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const config = {
  templateFormats: ["html", "md", "njk"],

  // If your site lives in a different subdirectory, change this.
  pathPrefix: "/",

  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  passthroughFileCopy: true,
  dir: {
    input: "src/site",
    output: "dist",
    layouts: "_includes/layouts"
  }
};

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);

  /*
    Layouts
    Add extension-less aliases, e.g. base => base.njk
  */
  const layouts = fs.readdirSync(
    path.join(config.dir.input, config.dir.layouts)
  );
  for (const layout of layouts) {
    const [root] = splitExt(layout);
    eleventyConfig.addLayoutAlias(root, layout);
  }

  /*
    Static assets
    By convention, all subdirectories under `public` are copied into the site root,
    e.g. `public/css` gets copied to `/css`
  */
  const assetsRoot = path.join(config.dir.input, "public");
  const assetDirs = fs.readdirSync(assetsRoot);
  for (const assetDir of assetDirs) {
    eleventyConfig.addPassthroughCopy({
      [path.join(assetsRoot, assetDir)]: assetDir
    });
  }

  return config;
};
