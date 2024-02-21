import React from 'react'
import { hero, infosHero } from "@/js/data/home/home";
import { socials } from '@/js/data/menu';
import ButtonComponent from '../ButtonComponent';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero md:px-5 lg:px-32 flex justify-between h-screen flex-col bg-hero bg-cover bg-left md:bg-center bg-no-repeat"
    >
      <div className="flex flex-col px-5 tracking-widest leading-7 justify-center lg:w-[75%] h-full pt-16">
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
      <div className="socials-links px-5">
        <ul className="flex gap-4 justify-center items-center left-0 right-0 mb-10">
          {socials.map((social, index) => (
            <li
              key={index}
              className="text-2xl lg:text-3xl hover:-translate-y-2 duration-300"
            >
              <a href={social.link} target="_blank" aria-label={social.aria}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Social section */}
    </section>
  );
}

export default Hero;