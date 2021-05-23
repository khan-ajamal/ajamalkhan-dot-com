import React from "react"

const Card = ({ title, description, url }) => {
  return (
    <li className="block text-darkBlue bg-cream md:bg-white rounded-lg p-4 shadow-xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mr-2 md:mb-3">
      <h3 className="text-xl mb-1 font-medium">{title}</h3>
      <h4 className="text-base mb-4">{description}</h4>
      <div className="w-full flex justify-end">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-green-600 text-base"
        >
          Check Demo
        </a>
      </div>
    </li>
  )
}

export default Card
