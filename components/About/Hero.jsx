import React from "react";
import SectionsComponent from "../SectionsComponent";
import SectionTitle from "../SectionTitle";
import { aboutMe } from "@/js/data/about/about";
import MyCard from "../MyCard";

const Hero = () => {
  return (
    <SectionsComponent id="about-me" otherClasses="pt-32 md:pt-48">
      <SectionTitle title="About Me" text="What to Know" />
      <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
        <div className="flex justify-start lg:w-1/2">
          {aboutMe.map((about, index) => (
            <div key={index}>
              <p className="description tracking-wide text-slate text-justify mb-5">
                {about.description}
              </p>
              <a
                href="Jean_Emmanuel_Resume.pdf"
                target="_blank"
                aria-label="Download my resume"
                className="px-3 py-2 my-5 border border-lightestSlate bg-blue text-xs md:text-sm font-medium text-lightestSlate uppercase hover:text-blue duration-300 btn41-43 btn-41"
              >
                Download Resume
              </a>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 md:p-3">
          <MyCard />
        </div>
      </div>
    </SectionsComponent>
  );
};

export default Hero;
