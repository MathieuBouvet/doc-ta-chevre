import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div className="features">
      {data.allFile.features.map(({ data: feature }) => (
        <div key={feature.id}>
          <h2>
            <Link to={feature.fields.slug}>{feature.frontmatter.title}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: feature.html }}></div>
        </div>
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
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
