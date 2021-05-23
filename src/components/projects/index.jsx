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
    <div className="w-screen bg-cream">
      <div className="container px-8 pt-4 pb-20" id="projects">
        <h2 className="text-2xl mt-4 mb-8 font-medium">Projects</h2>
        <ul className="flex flex-wrap">
          {projects.map(project => (
            <Card {...project} key={project} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects
