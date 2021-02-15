// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Belvedere's Blog",
  siteDescription: "A collection of projects and news from Francesco Belvedere",
  templates: {
    Post: "/blog/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Post"],
        feedOptions: {
          title: "Belvedere's Blog",
          description:
            "A collection of projects and news from Francesco Belvedere",
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        atom: {
          enabled: false,
          output: "/feed.atom",
        },
        json: {
          enabled: false,
          output: "/feed.json",
        },
        maxItems: 25,
        htmlFields: ["description", "content"],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content,
        }),
      },
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
