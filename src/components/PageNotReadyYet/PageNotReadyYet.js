import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "goat-box.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <h1>La page n'est pas encore prête...</h1>
      <Image
        className="stupid-images"
        imgStyle={{
          objectFit: "cover",
        }}
        fluid={data.file.childImageSharp.fluid}
      />
    </>
  )
}
