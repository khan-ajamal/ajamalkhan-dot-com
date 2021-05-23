import React from "react"

import Seo from "../components/seo"
import Base from "../components/base"
import Hero from "../components/hero"
import Projects from "../components/projects"

export default function Home() {
  return (
    <>
      <Seo />
      <Base>
        <Hero />
        <Projects />
      </Base>
    </>
  )
}
