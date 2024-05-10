import React from "react";
import { hero } from "@/js/data/home/home";
import ButtonComponent from "../utils/ButtonComponent";
import SocialComponent from "../utils/SocialComponent";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="w-[100%] h-[100%] text-lightestSlate">
      <div className="md:px-5 lg:px-32 2xl:px-80 h-screen flex flex-col justify-between">
        <div className="flex flex-col px-5 tracking-wide leading-7 justify-center h-full pt-16 z-0">
          {hero.map((content, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-16"
            >
              <div className="flex flex-col items-start">
                <div className="text-center lg:text-left mb-7">
                  <p className="md:text-lg">{content.greating}</p>
                  <div className="font-extrabold my-5 description">
                    <h1 className="text-orange-500 text-[1.4rem] mb-3 md:text-3xl lg:text-[2.5rem] lg:mb-5 uppercase">
                      {content.title}{" "}
                      <span className="text-lightestSlate">CADET</span>
                    </h1>
                    <h2 className="text-[1.4rem] font-semibold md:text-3xl lg:text-[2.1rem]">
                      {content.subTitle}
                    </h2>
                  </div>
                  <p className="mb-5 md:text-lg description">
                    {content.description}
                  </p>
                  <ButtonComponent path="/contact" text="Contact me" />
                </div>

                <div className="hidden lg:flex">
                  <SocialComponent className="lg:text-3xl mr-3" />
                </div>
              </div>
              <div className="hidden lg:flex">
                <Image
                  src="/developer.svg"
                  width={70}
                  height={70}
                  alt={content.title}
                  className="mb-7 w-[50rem]"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Social section */}
        <div className="socials-links lg:hidden text-left px-5 z-0 mb-10">
          <SocialComponent />
        </div>
        {/* End Social section */}
      </div>
    </section>
  );
};

export default Hero;
