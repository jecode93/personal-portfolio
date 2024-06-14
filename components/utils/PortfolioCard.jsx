import Image from 'next/image';
import React from 'react'

const PortfolioCard = ({ content, index }) => {
  return (
    <div key={content.id} className="duration-500 divide-x">
      <div
        className={`flex flex-col md:flex-row justify-between ${
          index % 2 === 0 ? "" : "md:flex-row-reverse"
        } items-center rounded-lg hover:cursor-pointer duration-500 mb-14 border border-transparent hover:border-orange-500 hover:-translate-y-1`}
      >
        <div className="p-10">
          <Image
            src={content.image}
            alt={content.title}
            width={500}
            height={500}
            className="mb-3 rounded-lg w-30 mx-auto"
          />
        </div>
        <div className="p-3 md:w-[50%]">
          <h1 className="text-lg md:text-3xl font-bold hover:text-orange-500 duration-500">
            {content.title}
          </h1>
          <p className="text-slate mt-3 description">
            {content.description.slice(0, 250) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard