import React from "react";

const SkillsCard = ({ content }) => {
  return (
    <div key={content.id} className="bg-darkblue p-5">
      <div>
        <div className="text-xl">{content.percentage} %</div>
        <div className="w-full bg-bluethin h-1 my-4">
          <div
            className="bg-orange-500 h-1"
            style={{ width: `${content.percentage}%` }}
          />
        </div>
      </div>
      <div>
        <h2 className="font-medium">{content.title}</h2>
      </div>
    </div>
  );
};

export default SkillsCard;
