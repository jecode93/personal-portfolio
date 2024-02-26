import React from "react";
import { hero } from "@/js/data/home/home";
import { socials } from "@/js/data/menu";
import ButtonComponent from "../ButtonComponent";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-hero w-screen bg-cover bg-no-repeat bg-fixed"
    >
      <div className="bg-gradient-to-t from-blue w-screen h-screen absolute" />
      <div className="md:px-5 lg:px-32 h-screen flex flex-col justify-between">
        <div className="flex flex-col px-5 tracking-widest leading-7 justify-center lg:w-[75%] h-full pt-16 z-20">
          {hero.map((text, index) => (
            <div key={index}>
              <p className="text-lg text-white md:text-2xl">{text.subTitle}</p>
              <h1 className="text-3xl my-3 md:text-6xl font-black md:leading-tight text-orange-500 description">
                <span>{text.title}</span>
              </h1>

              {/* <div className="border w-16 md:w-30 mb-7 text-gray" /> */}
              <p className="mb-10 text-lg md:text-2xl description">
                {text.description}
              </p>
            </div>
          ))}
          <ButtonComponent path="/contact" text="Contact me" />
        </div>
        {/* Social section */}
        <div className="socials-links px-5 z-20">
          <ul className="flex gap-4 justify-center items-center left-0 right-0 mb-10">
            {socials.map((social, index) => (
              <li
                key={index}
                className="text-2xl hover:-translate-y-2 duration-300"
              >
                <a
                  href={social.link}
                  target="_blank"
                  aria-label={social.aria}
                  className="hover:text-orange-500"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* End Social section */}
      </div>
    </section>
  );
};

export default Hero;
