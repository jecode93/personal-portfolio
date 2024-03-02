import React from "react";
import { hero } from "@/js/data/home/home";
import ButtonComponent from "../ButtonComponent";
import SocialComponent from "../SocialComponent";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen bg-hero-mobile md:bg-hero-large lg:bg-center bg-cover bg-no-repeat"
    >
      <div className="bg-gradient-to-t from-blue w-screen h-screen absolute" />
      <div className="bg-gradient-to-r from-blue w-screen h-screen absolute" />
      <div className="md:px-5 lg:px-32 h-screen flex flex-col justify-between">
        <div className="flex flex-col px-5 tracking-widest leading-7 justify-center lg:w-[75%] h-full pt-16 z-0">
          {hero.map((text, index) => (
            <div key={index}>
              <p className="text-lg text-white md:text-2xl">{text.subTitle}</p>
              <h1 className="text-3xl my-3 md:text-6xl font-black md:leading-tight text-orange-500 description">
                <span>{text.title}</span>
              </h1>
              <p className="mb-10 text-lg md:text-2xl description">
                {text.description}
              </p>
            </div>
          ))}
          <ButtonComponent path="/contact" text="Contact me" />
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
