/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        extraDirsToCache: ["/public/static"],
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/public/static/*": ["Cache-Control: public, max-age=31536000"],
        },
      },
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.relatedFeatures":
      "MarkdownRemark.frontmatter.title",
  },
}
