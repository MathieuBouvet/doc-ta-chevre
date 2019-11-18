import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <h1>Doc ta Chèvre</h1>
    <p>La DOC de l'API de l'APLI</p>
    <Image fluid={data.file.childImageSharp.fluid} />
  </Layout>
)
export const query = graphql`
  query {
    file(relativePath: { eq: "goat-book.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
