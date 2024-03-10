import React from 'react'

const ApproachCard = ({ content }) => {
  return (
    <div key={content.id} className="p-5 bg-darkblue">
      <span className="text-2xl font-semibold bg-orange-500 text-darkblue px-2">
        {content.id}
      </span>
      <h2 className="font-medium text-xl lg:text-2xl my-4">{content.title}</h2>
      <p className="text-degrade text-lg md:text-justify">
        {content.description}
      </p>
    </div>
  );
}

export default ApproachCard;