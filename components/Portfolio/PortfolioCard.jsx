import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const PortfolioCard = ({ content, index }) => {
  return (
    <div key={content.id} className="duration-500 divide-x">
      <Link href={`portfolio/${content.id}`}>
        <div
          className={`flex flex-col md:flex-row justify-between ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } items-center rounded-lg hover:cursor-pointer duration-500 mb-14`}
        >
          <div className="md:p-10 md:border md:border-lightSlate transition hover:border-orange-500 hover:-translate-y-1 duration-500 rounded-lg">
            <Image
              src={content.image}
              alt={content.title}
              width={500}
              height={500}
              className="mb-3 rounded-lg w-30 mx-auto"
            />
          </div>
          <div className="p-3 md:w-[50%]">
            <h1 className="text-xl md:text-3xl font-bold hover:text-orange-500 duration-500">
              {content.title}
            </h1>
            <p className="text-slate mt-3 mb-5 description">
              {content.description.slice(0, 250) + "..."}
            </p>
            <MdArrowOutward
              className="text-orange-500 text-4xl rounded-full p-1 border hover:bg-orange-500 hover:text-blue transition duration-500"
              title="View portfolio details"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
