import React from "react";

const InfoCard = ({ content }) => {
  const { id, icon, linkTo, text } = content;
  return (
    <div key={id} className="mb-3">
      <p className="flex items-center gap-3 text-md">
        <span className="text-orange-500">{icon}</span>
        <a
          href={linkTo}
          className="hover:text-orange-500 hover:underline transition duration-500 text-sm md:text-base"
        >
          {text}
        </a>
      </p>
    </div>
  );
};

export default InfoCard;
