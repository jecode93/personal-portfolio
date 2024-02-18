import React from 'react'

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <h2 className="uppercase text-[50px] mb-5 font-black tracking-widest md:text-[100px] lg:text-[150px] opacity-20">
        {title}
      </h2>
      <div className="mb-20">
        <h1 className="font-bold text-3xl md:text-5xl mb-5">{text}</h1>
        <div className="w-20 md:w-40 border opacity-40" />
      </div>
    </>
  );
}

export default SectionTitle