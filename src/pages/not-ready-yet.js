import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>La page n'est pas encore prête...</h1>
    <Image
      className="stupid-images"
      imgStyle={{
        objectFit: "cover",
      }}
      fluid={data.file.childImageSharp.fluid}
    />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "goat-box.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
