"use client";
import React from "react";
import SocialComponent from "./SocialComponent";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  }

  return (
    <>
      <footer className="relative">
        <div className="flex flex-col-reverse gap-7 md:flex-row justify-between items-center text-center py-7 px-5 md:px-10 lg:px-32 2xl:px-80">
          <p className="text-xs md:text-sm text-slate tracking-wide">
            Copyright © 2023 - {currentYear}. All right reserved
          </p>
          <SocialComponent />
        </div>
        <FaArrowUp
          onClick={topFunction}
          className="absolute right-5 -top-4 text-3xl bg-lightestSlate text-blue p-1 hover:-translate-y-2 duration-300 hover:cursor-pointer"
        />
      </footer>
    </>
  );
};

export default Footer;
