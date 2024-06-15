import Cta from "@/components/utils/Cta";
import PreviewButton from "@/components/utils/PreviewButton";
import SectionTitle from "@/components/utils/SectionTitle";
import SectionsComponent from "@/components/utils/SectionsComponent";
import { portfolios } from "@/js/data/home/portfolio";
import Image from "next/image";
import React from "react";

const PortfolioDetails = ({ params }) => {
  const details = (id) => {
    return portfolios.find((portfolio) => portfolio.id.toString() === id);
  };

  const selectedPortfolio = details(params.id);
  const { title, image, description, resume, stack, link } = selectedPortfolio || {};

  return (
    <>
      <SectionsComponent id="portfolio-details" otherClasses="pt-32 md:pt-48">
        <SectionTitle title={title} text={resume} />
        <div className="flex flex-col items-center mb-10">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="rounded md:w-[40%] mb-5"
          />
          <PreviewButton title={title} link={link} />
        </div>
        <div className="p-5 md:p-16 content overflow-auto">
          <p className="text-slate tracking-wide text-justify description">
            {description}
          </p>
          <div className="my-7">
            <h1 className="text-xl md:text-2xl">Technologies:</h1>
            <div className="grid grid-cols-2 gap-2 my-7">
              {stack.map((item, index) => (
                <div key={index}>
                  <p className="bg-darkblue p-1 flex justify-center rounded">
                    <span className="text-slate">{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionsComponent>
      <Cta />
    </>
  );
};

export default PortfolioDetails;
