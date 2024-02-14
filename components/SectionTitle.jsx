import React from 'react'

const SectionTitle = ({ title, text }) => {
  return (
    <>
      <h2 className="uppercase tracking-widest md:text-xl text-orange-500 mb-10">
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