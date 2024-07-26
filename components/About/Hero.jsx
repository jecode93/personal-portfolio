"use client";
import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import { aboutMe } from "@/js/data/about/about";
import MyCard from "../utils/MyCard";
import ResumeButton from "../utils/ResumeButton";

const Hero = () => {
  return (
    <SectionsComponent id="about-me" otherClasses="pt-32 md:pt-48">
      <SectionTitle title="About Me" text="What to Know" />
      <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
        <div className="flex justify-start lg:w-2/3">
          {aboutMe.map((about, index) => (
            <div key={index}>
              <p className="description tracking-wide text-slate text-justify mb-5">
                {about.description}
              </p>
              <div className="lg:hidden my-10">
                <ResumeButton />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 md:p-3">
          <MyCard />
        </div>
      </div>
    </SectionsComponent>
  );
};

export default Hero;
