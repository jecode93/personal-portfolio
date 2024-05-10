import React from "react";

const ExperiencesCard = ({ content }) => {
  return (
    <div className="bg-darkblue p-5 transition duration-500 border border-transparent hover:border-orange-500 hover:-translate-y-1 rounded">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="font-medium text-lg lg:text-xl ">{content.company}</h2>
          <p className="text-slate text-sm">{content.role}</p>
        </div>
        <span className="text-sm text-orange-500 tracking-wide">
          {content.year}
        </span>
      </div>
      <div className="w-full h-[1px] my-5 bg-orange-500" />
      <p className="text-slate md:text-justify description">
        {content.description}
      </p>
    </div>
  );
};

export default ExperiencesCard;
