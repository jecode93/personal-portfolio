import Image from "next/image";
import React from "react";
import { aboutme } from "@/js/data/home/home";
import me from "@/public//images/me.jpg";
import ButtonComponent from "../ButtonComponent";
import SectionsComponent from "../SectionsComponent";

const About = () => {
  return (
    <SectionsComponent id="about" otherClasses="bg-trait bg-no-repeat bg-right">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:px-5">
        <div className="flex justify-center items-center lg:w-1/2 2xl:w-1/3 p-5">
          <div className="flex justify-center items-center w-full relative p-7">
            <div className="h-full w-[93%] absolute border border-slate opacity-50"></div>
            <div className="w-full h-[93%] absolute border border-slate opacity-50"></div>
            <div className="text-center flex flex-col justify-center items-center md:p-3">
              <Image
                src={me}
                className="w-full md:w-[500px] mb-4"
                alt="Jean Emmanuel Cadet"
                width={500}
                height={500}
              />
              <div className="flex">
                <span className="relative flex items-center mr-3">
                  <span className="animate-ping absolute inline-flex h-3 w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                </span>
                <p className="underline text-slate tracking-widest">
                  I&apos;m available for work!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start lg:w-1/2">
          {aboutme.map((about, index) => (
            <div key={index}>
              <h1 className="text-lg md:text-xl mb-7 text-orange-500">
                Who am I?
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl mb-5 font-semibold tracking-wide">
                {about.title}
              </h2>
              <p className="tracking-wide text-justify mb-5 text-degrade description">
                {about.description}
              </p>
            </div>
          ))}
          <ButtonComponent path="/about-me" text="Read more about me" />
        </div>
      </div>
    </SectionsComponent>
  );
};

export default About;
