import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div className="features">
      {data.allFile.features.map(feature => (
        <div
          key={feature.data.id}
          dangerouslySetInnerHTML={{ __html: feature.data.html }}
        ></div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
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
          html
        }
      }
    }
  }
`
