import React from "react"

const Card = ({ title, description, url }) => {
  return (
    <div className="rounded p-4 shadow-xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mr-2 md:mb-3">
      <h3 className="text-2xl mb-1">{title}</h3>
      <h4 className="text-lg mb-4">{description}</h4>
      <div className="w-full flex justify-end">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-green-500 text-base"
        >
          Check Demo
        </a>
      </div>
    </div>
  )
}

export default Card
