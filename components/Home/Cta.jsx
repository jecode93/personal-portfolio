import React from 'react'
import SectionsComponent from '../SectionsComponent';
import Link from "next/link";

const Cta = () => {
  return (
    <SectionsComponent
      id="call_to_action"
      otherClasses="bg-orange-500 text-center text-blue"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-blue">
        Let&apos;s Build it. Together.
      </h2>
      <p className="my-7 md:mx-5 lg:mx-32 text-lg md:text-xl tracking-wider">
        As a seasoned full-stack software engineer, I bring innovation and
        proficiency to every project I undertake. Whether you&apos;re a startup
        in need of a dynamic web application or an established enterprise
        seeking cutting-edge software solutions, I&apos;m here to turn your
        vision into reality. Let&apos;s collaborate to create tailored solutions
        that exceed your expectations and propel your business forward.
      </p>
      <Link
        href="contact"
        className="px-3 py-2 bg-blue text-sm font-bold text-white uppercase hover:bg-bluethin duration-300 rounded"
      >
        Start today
      </Link>
    </SectionsComponent>
  );
};

export default Cta;