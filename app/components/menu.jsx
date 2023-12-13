"use client";
import React, { useState } from "react";
import "./styles/menu.css";
import Image from "next/image";
import logo from "../images/logo-header2.png";
import logowhite from "../images/logo-header.png";
import Link from "next/link";
import { menu, socials } from '../js/data/menu'
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="px-5 py-5 lg:py-0">
      {/* Mobile logo and icons */}
      <div className="min-[940px]:hidden flex justify-between items-center">
        {/* Logo header */}
        <Link href="/" className="hover:scale-125 duration-300">
          <Image src={logo} alt="Logo jecode93" width={40} />
        </Link>
        {/* End logo header */}

        {/* Mobile icon */}
        <div
          className="humberger absolute right-5 cursor-pointer flex flex-col items-end justify-around w-10 h-10 rounded p-1"
          onClick={handleClick}
        >
          <div className="line-1 border-2 border-orange-500 rounded"></div>
          <div className="line-2 border-2 border-orange-500 rounded"></div>
          <div className="line-3 border-2 border-orange-500 rounded"></div>
        </div>
        {/* End Mobile icon */}
      </div>
      {/* End mobile logo and icons */}

      {/* Blur background */}
      <div
        className={`${
          isOpen
            ? "fixed w-screen h-screen top-0 left-0 right-0 backdrop-blur-sm"
            : ""
        }`}
      ></div>
      {/* End Blur background */}

      {/* Mobile menu links */}
      <div id="mobile" className="relative">
        <div
          className={`${
            isOpen ? "right-0" : "-right-[100%]"
          } fixed top-0 bg-orange-600 w-3/4 h-screen duration-500`}
        >
          <div className="flex justify-center mt-5" onClick={handleClick}>
            <Link href="/" className="hover:scale-125 duration-300">
              <Image src={logowhite} alt="Logo jecode93" width={40} />
            </Link>
          </div>
          <nav>
            <div
              className="absolute top-5 right-5 cursor-pointer text-white text-3xl font-extrabold duration-500"
              onClick={handleClick}
            >
              <span>
                <MdClose className="hover:rotate-180 duration-300" />
              </span>
            </div>

            <div className="menu-links mt-[50%] ml-5">
              <ul className="menu-items" onClick={handleClick}>
                {menu.map((data, index) => (
                  <li key={index} className="mb-4 text-lg hover:text-black w-28 hover:-translate-y-1 duration-300">
                    <Link href={data.path}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="socials-links ml-10">
              <ul className="absolute flex gap-4 justify-center items-center left-0 right-0 bottom-[13%]">
                {socials.map((social, index) => (
                  <li key={index} className="text-3xl hover:-translate-y-2 duration-300">
                    <a href={social.link} target="_blank">{social.icon}</a>
                  </li>
                ))}
              </ul>
              <div className="absolute mx-auto left-0 right-0 bottom-[10%] w-20 border border-white shadow-2xl"></div>
            </div>
          </nav>
        </div>
      </div>
      {/* End Mobile menu links */}

      {/* Desktop menu */}
      <div className="desktopMenu hidden relative min-[940px]:block mt-5 mx-28 rounded-lg px-5 py-3 backdrop-blur-xl">
        <div className="flex z-10 w-full justify-between items-center">
          <Link href="/" className="hover:scale-125 duration-300">
            <Image src={logo} alt="Logo jecode93" width={50} />
          </Link>
          <ul className="flex">
            {menu.map((data, index) => (
              <li key={index} className="hover:text-orange-500 mr-10 duration-300">
                <Link href={data.path}>{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Desktop menu */}
    </header>
  );
};

export default Navbar;
