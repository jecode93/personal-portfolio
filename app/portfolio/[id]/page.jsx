import BookingCalendly from "@/components/utils/BookingCalendly";
import ButtonComponent from "@/components/utils/ButtonComponent";
import Cta from "@/components/utils/Cta";
import PreviewButton from "@/components/utils/PreviewButton";
import SectionTitle from "@/components/utils/SectionTitle";
import SectionsComponent from "@/components/utils/SectionsComponent";
import { portfolios } from "@/js/data/home/portfolio";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const PortfolioDetails = ({ params }) => {
  const details = (id) => {
    return portfolios.find((portfolio) => portfolio.id.toString() === id);
  };

  const selectedPortfolio = details(params.id);
  const { title, image, description, resume, stack, link, github} =
    selectedPortfolio || {};

  if (!selectedPortfolio) {
    return (
      <>
        <SectionsComponent
          id="portfolio-not-found"
          otherClasses="pt-32 md:pt-48"
        >
          <div className="flex flex-col items-center my-5">
            <p className="text-xl md:text-3xl lg:text-5xl mb-6">
              Portfolio with id:{" "}
              <span className="font-bold underline">{params.id}</span> not found
            </p>

            <ButtonComponent path="/portfolio" text="Go to porfolio page" />
          </div>
        </SectionsComponent>
        <Cta />
      </>
    );
  }

  return (
    <>
      <SectionsComponent id="portfolio-details" otherClasses="pt-32 md:pt-48">
        <SectionTitle title={title} text={resume} />
        <div className="flex flex-col items-center mb-10">
          <Image
            src={image}
            alt={title}
            width={700}
            height={500}
            className="rounded lg:w-[60%] mb-5"
          />
          <div className="flex justify-center items-center gap-5">
            <PreviewButton title={title} link={link} text="See live" icon={<FiExternalLink/>}/>
            <PreviewButton title={title} link={github} text="See source" icon={<FaGithub/>}/>
          </div>
        </div>
        <div className="md:p-16 content overflow-auto md:bg-darkblue md:shadow-xl rounded">
          <p className="text-slate tracking-wide text-justify description">
            {description}
          </p>
          <div className="my-7">
            <h1 className="text-xl md:text-2xl font-bold">Technologies:</h1>
            <div className="grid grid-cols-2 gap-2 my-7">
              {stack.map((item, index) => (
                <div key={index}>
                  <p className="bg-darkblue md:bg-blue p-1 flex justify-center rounded">
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
