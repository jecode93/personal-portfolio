import React from "react";
import SectionsComponent from "./SectionsComponent";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Cta = () => {
  return (
    <SectionsComponent
      id="call_to_action"
      otherClasses="bg-orange-500 text-center text-blue"
    >
      <h2 className="text-xl md:text-4xl 2xl:text-5xl font-bold uppercase">
        Let&apos;s Build it. Together.
      </h2>
      <p className="my-7 md:mx-5 lg:mx-24 tracking-wide">
        As a seasoned full-stack software engineer, I bring innovation and
        proficiency to every project I undertake. Whether you&apos;re a startup
        in need of a dynamic web application or an established enterprise
        seeking cutting-edge software solutions, I&apos;m here to turn your
        vision into reality.
        <br />
        <br />
        Let&apos;s collaborate to create tailored solutions that exceed your
        expectations and propel your business forward.
      </p>
      <Link
        href="contact"
        className="px-5 py-2 bg-blue text-xs md:text-sm text-lightestSlate uppercase hover:text-blue transition duration-500 btn41-43 btn-41"
      >
        <div className="flex gap-2 items-center">
          <span>Get Started</span>
          <FaChevronRight />
        </div>
      </Link>
    </SectionsComponent>
  );
};

export default Cta;
