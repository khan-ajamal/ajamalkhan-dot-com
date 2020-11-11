import React from "react"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Base from "../components/base"
import SEO from "../components/seo"

import styles from "../css/home.module.css"

export default function Home() {
  const {
    profilePic,
    github,
    linkedin,
    medium,
    email,
  } = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profile-pic.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, srcSetBreakpoints: [400, 520, 800, 1200, 1600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 25) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      medium: file(relativePath: { eq: "medium.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 25) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      email: file(relativePath: { eq: "email.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <Base>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.profilePic}>
              <Img
                imgStyle={{ borderRadius: "100%" }}
                fluid={profilePic.childImageSharp.fluid}
                alt="Ajamal Khan"
              />
            </div>
            <h1 className="mt-4 font-medium text-2xl">Mohammad Ajamal Khan</h1>
            <h2 className="mb-8 font-normal text-base">
              Software Engineer
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.chefling.com/"
                className="inline-block ml-1 text-green-500"
              >
                @chefling
              </a>
            </h2>
            <div className="flex justify-center items-center space-x-4">
              <div>
                <a
                  aria-label="Checkout Ajamal's GitHub profile"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/khan-ajamal"
                  className="flex justify-center items-center rounded-full h-10 w-10 bg-white shadow"
                >
                  <Img
                    fixed={github.childImageSharp.fixed}
                    alt="Ajamal's GitHub Account"
                    title="GitHub"
                  />
                </a>
              </div>
              <div>
                <a
                  aria-label="Checkout Ajamal's LinkedIn profile"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/ajamalkhan/"
                  className="flex justify-center items-center rounded-full h-10 w-10 bg-white shadow"
                >
                  <Img
                    fixed={linkedin.childImageSharp.fixed}
                    alt="Ajamal's LinkedIn Account"
                    title="LinkedIn"
                  />
                </a>
              </div>
              <div>
                <a
                  aria-label="Checkout Ajamal's Medium profile"
                  rel="noreferrer"
                  target="_blank"
                  href="https://medium.com/@ajamalkhan65"
                  className="flex justify-center items-center rounded-full h-10 w-10 bg-white shadow"
                >
                  <Img
                    fixed={medium.childImageSharp.fixed}
                    alt="Ajamal's Medium Profile"
                    title="Medium"
                  />
                </a>
              </div>
              <div>
                <a
                  href="mailto:ajamalkhan65@gmail.com"
                  className="flex justify-center items-center rounded-full h-10 w-10 bg-white shadow"
                >
                  <Img
                    fixed={email.childImageSharp.fixed}
                    alt="Ajamal's Email Address"
                    title="Email"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </>
  )
}
