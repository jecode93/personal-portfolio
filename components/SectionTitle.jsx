import React from 'react'

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <h2 className="uppercase text-slate text-[50px] md:-mb-6 font-black tracking-widest md:text-[100px] lg:text-[150px] opacity-60">
        {title}
      </h2>
      <div className="mb-20">
        <h1 className="font-bold text-3xl md:text-5xl mb-7">{text}</h1>
        <div className="w-20 md:w-20 border border-orange-500" />
      </div>
    </>
  );
}

export default SectionTitle