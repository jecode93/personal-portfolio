import React from "react";
import SectionsComponent from "../SectionsComponent";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import me from "@/public//images/me.jpg";
import { aboutMe } from "@/js/data/about/about";
import SocialComponent from "../SocialComponent";

const Hero = () => {
  return (
    <SectionsComponent id="about-me" otherClasses="pt-60">
      <SectionTitle title="About Me" text="What to Know" />
      <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
        <div className="flex justify-start lg:w-1/2">
          {aboutMe.map((about, index) => (
            <div key={index}>
              <p className="description text-lg tracking-wide text-degrade text-justify">
                {about.description}
              </p>
              <a
                href="Jean_Emmanuel_Resume.pdf"
                target="_blank"
                aria-label="Download my resume"
                className="px-3 py-2 my-5 border border-white bg-blue text-xs md:text-sm font-bold text-white uppercase hover:text-blue duration-300 btn41-43 btn-41"
              >
                Download Resume
              </a>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 md:p-3">
          <div className="flex flex-col items-center">
            <Image
              src={me}
              className="w-full md:w-[500px] lg:w-[400px] mb-4"
              alt="Jean Emmanuel Cadet"
              width={500}
              height={500}
            />
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest">
                Jean Emmanuel CADET
              </p>
              <p className="text-lg md:text-xl text-degrade my-3">
                Full-stack Software Engineer
              </p>
              <SocialComponent />
            </div>
          </div>
        </div>
      </div>
    </SectionsComponent>
  );
};

export default Hero;
