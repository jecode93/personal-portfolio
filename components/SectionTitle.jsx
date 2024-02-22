import React from 'react'

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <h2 className="uppercase text-degrade text-[50px] md:-mb-6 md:-mt-10 font-black tracking-widest md:text-[100px] lg:text-[150px]">
        {title}
      </h2>
      <div className="mb-20 flex items-center">
        <div className="w-12 mr-3 border border-orange-500" />
        <h1 className="font-bold text-3xl md:text-5xl">{text}</h1>
      </div>
    </>
  );
}

export default SectionTitle