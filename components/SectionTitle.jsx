import React from "react";

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <h2 className="text-degrade text-[50px] md:-mb-4 md:-mt-16 font-extrabold tracking-widest md:text-[85px] lg:text-[120px]">
        {title}
      </h2>
      <div className="mb-20 flex items-center">
        <div className="w-12 mr-3 border border-orange-500" />
        <h1 className="font-bold text-xl md:text-4xl tracking-wider">{text}</h1>
      </div>
    </>
  );
};

export default SectionTitle;
