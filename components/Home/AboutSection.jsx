import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { aboutme } from "@/js/data/home";

const About = () => {
  return (
    <section id="about" className="about px-5 lg:px-32 py-20 bg-noise">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:px-5">
        <div className="flex justify-center items-center lg:w-1/2 2xl:w-1/3 p-5">
          <div className="flex justify-center items-center w-full relative p-7">
            <div className="h-full w-[93%] absolute border border-slate rounded opacity-50"></div>
            <div className="w-full h-[93%] absolute border border-slate rounded opacity-50"></div>
            <div className="text-center flex flex-col justify-center items-center md:p-5">
              <Image
                src="/images/me.jpg"
                className="w-full md:w-[500px] mb-4 rounded"
                alt="Jean Emmanuel Cadet"
                width={500}
                height={500}
              />
              <div className="flex">
                <span className="relative flex items-center mr-3">
                  <span class="animate-ping absolute inline-flex h-3 w-full rounded-full bg-green opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
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
              <h3 className="text-xl md:text-2xl mb-7 text-orange-500">
                Who am I?
              </h3>
              <h2 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold tracking-widest">
                {about.title}
              </h2>
              <p className="md:text-xl tracking-widest mb-5">
                {about.paragraph}
              </p>
              <p className="md:text-xl tracking-widest">{about.paragraph2}</p>
            </div>
          ))}
          <Link
            href="/about"
            className="w-fit mt-8 hover:scale-105 md:text-xl font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 px-5 py-2 duration-300 rounded-full"
          >
            Read more...
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;