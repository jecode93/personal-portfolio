import React from "react";
import { hero } from "@/js/data/home/home";
import ButtonComponent from "../ButtonComponent";
import SocialComponent from "../SocialComponent";

const Hero = () => {
  return (
    <section id="home" className="w-[100%] h-screen text-slate">
      <div className="md:px-5 lg:px-32 2xl:px-80 h-screen flex flex-col justify-between">
        <div className="flex flex-col px-5 tracking-wide leading-7 justify-center h-full pt-16 z-0">
          {hero.map((text, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="md:text-lg text-orange-500">{text.greating}</p>
              <div className="font-bold my-5 description">
                <h1 className="text-lightestSlate text-3xl md:text-6xl mb-3 uppercase">
                  {text.title}
                </h1>
                <h2 className="text-slate text-2xl md:text-5xl">
                  {text.subTitle}
                </h2>
              </div>
              <p className="mb-5 md:text-lg description md:w-[50%]">{text.description}</p>
              <ButtonComponent path="/contact" text="Contact me" />
            </div>
          ))}
        </div>
        {/* Social section */}
        <div className="socials-links px-5 z-0 mb-10">
          <SocialComponent />
        </div>
        {/* End Social section */}
      </div>
    </section>
  );
};

export default Hero;
