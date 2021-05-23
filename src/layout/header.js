import React from "react"

import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

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
    <header className="absolute w-screen bg-transparent px-8 h-20">
      <div className="h-full w-full bg-transparent flex justify-between items-center">
        <div className="w-12 h-12">
          <Img fixed={logo.childImageSharp.fixed} alt="Ajamal's Website" />
        </div>
        <div className="w-full h-full text-white flex justify-end items-center ml-8">
          <ul>
            <li className="text-xl">
              <Link to="#projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
