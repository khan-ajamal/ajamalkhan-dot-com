import React from "react"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 50) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header className="absolute w-screen bg-transparent px-4 h-20">
      <div className="container h-full w-full bg-transparent flex justify-start items-center">
        <div className="w-12 h-12">
          <Img fixed={logo.childImageSharp.fixed} alt="Ajamal's Website" />
        </div>
      </div>
    </header>
  )
}

export default Header
