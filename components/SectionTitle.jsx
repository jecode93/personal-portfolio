import React from "react";

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <h2 className="text-orange-500 text-[40px] md:-mb-2 md:-mt-16 font-semibold tracking-widest md:text-[70px] lg:text-[100px]">
        {title}
      </h2>
      <div className="mb-20 flex items-center">
        <div className="w-12 mr-3 border border-orange-500" />
        <h1 className="font-medium text-xl md:text-3xl tracking-wider">{text}</h1>
      </div>
    </>
  );
};

export default SectionTitle;
