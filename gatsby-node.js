const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const featuresResult = await graphql(`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "markdown" }
          relativeDirectory: { eq: "features" }
        }
      ) {
        features: nodes {
          data: childMarkdownRemark {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)
  featuresResult.data.allFile.features.forEach(feature => {
    createPage({
      path: feature.data.fields.slug,
      component: path.resolve(`${__dirname}/src/templates/feature.js`),
      context: {
        slug: feature.data.fields.slug,
      },
    })
  })
}
