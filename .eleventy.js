const path = require("path");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { filters } = require("./src/utils");

const config = {
  templateFormats: ["11ty.js", "html", "md", "njk"],

  // If your site lives in a different subdirectory, change this.
  pathPrefix: "/",

  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",

  dir: {
    input: "src/site",
    output: "dist",
    layouts: "_includes/layouts"
  }
};

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters
  for (const filter in filters) {
    eleventyConfig.addFilter(filter, filters[filter]);
  }

  // Collections
  eleventyConfig.addCollection("posts", collection =>
    collection.getAllSorted().filter(item => /\/posts\//.test(item.inputPath))
  );

  const tagsExclude = new Set(["all", "posts"]);
  eleventyConfig.addCollection("tags", collection => {
    const tags = collection
      .getAll()
      .flatMap(item => item.data.tags)
      .filter(item => item !== undefined);
    return [...new Set(tags)].sort();
  });

  // Static assets: copy everything under `public` into the site root
  const assetsRoot = path.join(config.dir.input, "public");
  eleventyConfig.addPassthroughCopy({ [assetsRoot]: "/" });

  return config;
};
