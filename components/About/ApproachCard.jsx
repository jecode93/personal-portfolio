import React from "react";

const ApproachCard = ({ content }) => {
  return (
    <div
      key={content.id}
      className="p-5 bg-darkblue transition duration-500 border border-transparent hover:border-orange-500 hover:-translate-y-1 rounded shadow-lg"
    >
      <span className="text-xl font-semibold bg-orange-500 text-darkblue px-2">
        {content.id}
      </span>
      <h2 className="font-medium text-lg md:text-xl 2xl:text-2xl my-4">
        {content.title}
      </h2>
      <p className="text-slate md:text-justify">{content.description}</p>
    </div>
  );
};

export default ApproachCard;
