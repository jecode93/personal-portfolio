"use client";
import React, { useState } from "react";
import "./styles/menu.css";
import Image from "next/image";
import bullet from "../images/bullet.png";
import Link from "next/link";
import { menu, socials } from '../js/data/menu'
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="px-5 py-5">
      {/* Mobile logo and icons */}
      <div className="flex justify-between items-center">
        {/* Mobile icon */}
        <div
          className="hamburger fixed top-5 right-5 cursor-pointer flex flex-col items-end justify-around w-10 h-10 rounded p-1"
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
          } fixed top-0 bg-darkblue w-full md:w-[44%] h-screen duration-500`}
        >
          <nav className="h-full">
            <div
              className="absolute top-5 right-5 cursor-pointer text-white text-3xl font-extrabold duration-500"
              onClick={handleClick}
            >
              <span>
                <MdClose className="hover:rotate-180 duration-300" />
              </span>
            </div>

            <div className="py-12 px-[10%] flex flex-col justify-between h-full">
              <div className="menu-links ml-5">
                <h2 className="mb-8 uppercase text-gray">Menu</h2>
                <ul className="menu-items" onClick={handleClick}>
                  {menu.map((data, index) => (
                    <li
                      key={index}
                      className="mb-5 text-2xl hover:text-orange-500 w-28 hover:-translate-y-1 duration-300"
                    >
                      <Link href={data.path}>{data.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Social section */}
              <div className="socials-links z-40">
                <ul className="flex gap-4 justify-center items-center left-0 right-0 mb-10">
                  {socials.map((social, index) => (
                    <li
                      key={index}
                      className="text-2xl hover:-translate-y-2 duration-300"
                    >
                      <a href={social.link} target="_blank">
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mx-auto left-0 right-0 w-20 border border-white shadow-2xl"></div>
              </div>
              <div className="absolute bottom-0 right-0">
                <Image src={bullet} alt="bullet-point" width={80} />
              </div>
              <div className="absolute bottom-0 left-0">
                <Image src={bullet} alt="bullet-point" width={80} />
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* End Mobile menu links */}
    </header>
  );
};

export default Navbar;
