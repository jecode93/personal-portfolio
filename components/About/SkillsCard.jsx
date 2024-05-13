import Image from "next/image";
import React from "react";

const SkillsCard = ({ content }) => {
  return (
    <div
      key={content.id}
      className="bg-darkblue p-5 flex flex-col justify-center items-center rounded transition duration-500 border border-transparent hover:border-orange-500 hover:-translate-y-1"
    >
      <div>
        {/* <div className="text-xl">{content.percentage} %</div> */}
        <Image
          src={content.icon}
          width={70}
          height={70}
          alt={content.title}
          className="mb-7 w-15"
        />
        {/* <div className="w-full bg-lightestSlate h-1 my-4">
          <div
            className="bg-orange-500 h-1"
            style={{ width: `${content.percentage}%` }}
          />
        </div> */}
      </div>
      <div>
        <h2 className="font-medium text-lightestSlate">{content.title}</h2>
      </div>
    </div>
  );
};

export default SkillsCard;
