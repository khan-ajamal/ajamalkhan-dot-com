import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  const { profilePic, github, linkedin, medium, email } =
    useStaticQuery(graphql`
      {
        profilePic: file(relativePath: { eq: "profile-pic.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              breakpoints: [400, 520, 800, 1200, 1600]
              layout: FULL_WIDTH
            )
          }
        }
        github: file(relativePath: { eq: "github.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              width: 30
              placeholder: TRACED_SVG
              layout: FIXED
            )
          }
        }
        linkedin: file(relativePath: { eq: "linkedin.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              width: 25
              placeholder: TRACED_SVG
              layout: FIXED
            )
          }
        }
        medium: file(relativePath: { eq: "medium.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              width: 25
              placeholder: TRACED_SVG
              layout: FIXED
            )
          }
        }
        email: file(relativePath: { eq: "email.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              width: 30
              placeholder: TRACED_SVG
              layout: FIXED
            )
          }
        }
      }
    `)

  return (
    <div className="flex justify-center items-center md:p-4 bg-darkBlue w-screen h-screen">
      <div
        className="flex flex-col justify-center items-center p-8 md:rounded-md bg-cream w-full h-full max-w-lg sm:w-7/12 sm:h-auto md:w-1/2"
        style={{ boxShadow: "0px 0px 5px 0px rgba(255, 255, 255, 0.75)" }}
      >
        <div className="w-56 h-56 rounded-full">
          <GatsbyImage
            image={profilePic.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "100%" }}
            alt="Ajamal Khan"
          />
        </div>
        <h1 className="mt-4 text-darkBlue font-medium text-2xl text-center">
          <span className="hidden md:inline-block">Mohammad</span> Ajamal Khan
        </h1>
        <h2 className="mb-8 text-darkBlue font-normal text-base text-center">
          Senior Software Engineer
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.chefling.com/"
            className="inline-block ml-1 text-yellow-500"
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
              <GatsbyImage
                image={github.childImageSharp.gatsbyImageData}
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
              <GatsbyImage
                image={linkedin.childImageSharp.gatsbyImageData}
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
              <GatsbyImage
                image={medium.childImageSharp.gatsbyImageData}
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
              <GatsbyImage
                image={email.childImageSharp.gatsbyImageData}
                alt="Ajamal's Email Address"
                title="Email"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
