import React from 'react'
import { hero, infosHero } from "@/js/data/home/home";
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero md:px-5 lg:px-32 flex justify-between h-screen flex-col bg-hero bg-cover bg-left md:bg-center bg-no-repeat"
    >
      <div className="flex flex-col px-5 tracking-widest leading-7 justify-center lg:w-[75%] h-full pt-16">
        {hero.map((text, index) => (
          <div key={index}>
            <p className="text-white mb-3 md:text-xl">{text.subTitle}</p>
            <h1 className="text-2xl mb-5 md:text-6xl font-black md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-500">
              <span>{text.title}</span> <br />
              <span>{text.title2}</span>
            </h1>

            <div className="border w-20 md:w-40 mb-7 text-gray" />
            <p className="mb-3 md:text-xl">{text.desc1}</p>
            <p className="mb-7 md:text-xl">{text.desc2}</p>
          </div>
        ))}
        <Link
          href="/contact"
          className="md:hidden w-fit hover:scale-105 font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 px-5 py-2 duration-300 rounded-full"
        >
          Contact me
        </Link>
      </div>
      <div className="hidden mb-10 md:flex gap-5 md:divide-x">
        {infosHero.map((info, index) => (
          <div className="mb-5 md:mb-0 px-5 " key={index}>
            <h2 className="font-bold mb-1">{info.text}</h2>
            {info.text === "Email" && (
              <a href={`mailto:${info.content}`} className="text-gray">
                {info.content}
              </a>
            )}
            {info.text === "Phone" && (
              <a href={`tel:${info.content}`} className="text-gray">
                {info.content}
              </a>
            )}
            {info.text === "Work location" && (
              <p className="text-gray">{info.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;