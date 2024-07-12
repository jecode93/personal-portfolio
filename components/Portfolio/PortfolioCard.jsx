import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookingCalendly from "../utils/BookingCalendly";

const PortfolioCard = ({ content, index }) => {
  return (
    <div
      key={content.id}
      className="duration-500 divide-x mb-20 bg-darkblue rounded-md lg:p-6 flex items-center transition hover:border-orange-500 hover:-translate-y-1 shadow-lg"
    >
      <Link href={`portfolio/${content.id}`}>
        <div
          className={`flex flex-col lg:flex-row justify-between ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          } items-center hover:cursor-pointer duration-500 gap-10 pb-5 lg:pb-0`}
        >
          <div className="transition hover:border-orange-500 hover:-translate-y-1 duration-500 rounded-lg">
            <Image
              src={content.image}
              alt={content.title}
              width={700}
              height={500}
              className="rounded-t-lg lg:rounded-lg mx-auto"
            />
          </div>
          <div className="p-3 md:p-6 lg:p-0 lg:w-[50%]">
            <h1 className="text-xl md:text-3xl font-bold hover:text-orange-500 duration-500">
              {content.title}
            </h1>
            <p className="text-slate mt-3 mb-5 description">
              {content.description.slice(0, 250) + "..."}
            </p>
            <div className="w-fit text-xs md:text-sm mt-3 bg-orange-500 px-5 py-2 uppercase btn43-43 btn-43">
              See Project
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
