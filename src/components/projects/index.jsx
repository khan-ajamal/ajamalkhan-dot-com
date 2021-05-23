import React from "react"

import Card from "./card"

const Projects = () => {
  const projects = [
    {
      title: "Sorting Visualizer",
      description:
        "A platform to visualize how various sorting algorithm like bubble, merge, quick sorts works",
      url: "https://khan-ajamal.github.io/sorting-visualizer/",
    },
  ]
  return (
    <div className="container px-8 mb-16">
      <h2 className="text-3xl mt-8 mb-4">Projects</h2>
      <ul className="flex flex-wrap">
        {projects.map(project => (
          <Card {...project} key={project} />
        ))}
      </ul>
    </div>
  )
}

export default Projects
