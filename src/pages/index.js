import React from "react"

import SEO from "../components/seo"
import Base from "../components/base"
import Hero from "../components/hero"
import Projects from "../components/projects"

export default function Home() {
  return (
    <>
      <SEO />
      <Base>
        <Hero />
        <Projects />
      </Base>
    </>
  )
}
