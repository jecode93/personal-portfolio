import React from "react";

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <div>
        <h2 className="text-lightestSlate text-[40px] md:-mb-2 md:-mt-16 font-bold tracking-widest md:text-[60px] lg:text-[90px]">
          {title}
        </h2>
        <div className="mb-20 flex items-center">
          <div className="w-12 mr-3 h-[1px] my-7 bg-orange-500" />
          <h1 className="font-medium text-slate text-lg md:text-xl tracking-wider">
            {text}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
