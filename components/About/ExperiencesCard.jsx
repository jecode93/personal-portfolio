import React from "react";

const ExperiencesCard = ({ content }) => {
  return (
    <div className="bg-darkblue p-5">
      <div className="flex justify-between mb-5">
        <div>
          <h2 className="font-medium text-lg lg:text-xl ">{content.company}</h2>
          <p className="text-slate text-sm">{content.role}</p>
        </div>
        <span className="text-sm text-orange-500 tracking-wide">
          {content.year}
        </span>
      </div>
      <p className="text-slate md:text-justify description">
        {content.description}
      </p>
    </div>
  );
};

export default ExperiencesCard;
