"use client";
import React, { useEffect, useState } from "react";
import "./styles/menu.css";
import Image from "next/image";
import Link from "next/link";
import { menu, socials } from "@/js/data/menu";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className={`px-5 z-40 relative`}>
      {/* Mobile logo and icons */}
      <div className="flex justify-between items-center">
        {/* Mobile icon */}
        <div className="absolute top-7 left-5 md:px-5 lg:px-32">
          <Link href="/">
            <Image
              src="/images/jec.png"
              alt="Jean Emmanuel Cadet"
              width={300}
              height={21}
              priority
              className="hover:scale-105 duration-300 w-72"
            />
          </Link>
        </div>
        <div
          className="fixed top-5 right-5 cursor-pointer rounded p-1 mt-1 md:mt-0"
          onClick={handleClick}
        >
          <div className="flex justify-center items-center gap-1">
            <p className="hidden md:block font-bold text-degrade">Menu</p>
            <div className="hamburger flex flex-col items-end justify-around w-10 h-6">
              <div className="line-1 border-2 border-orange-500 rounded"></div>
              <div className="line-2 border-2 border-orange-500 rounded"></div>
              <div className="line-3 border-2 border-orange-500 rounded"></div>
            </div>
          </div>
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
        onClick={handleClick}
      ></div>
      {/* End Blur background */}

      {/* Mobile menu links */}
      <div id="mobile" className="relative">
        <div
          className={`${
            isOpen ? "right-0" : "-right-[100%]"
          } fixed top-0 bottom-0 bg-darkblue w-full md:w-[48%] h-screen duration-300`}
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

            <div className="py-20 px-5 md:px-[10%] flex flex-col justify-between h-full">
              <div className="menu-links">
                <h2 className="mb-8 uppercase text-orange-500 font-bold tracking-widest">
                  Menu
                </h2>
                <ul className="menu-items" onClick={handleClick}>
                  {menu.map((data, index) => {
                    const isActive = pathname === data.path;
                    return (
                      <li
                        key={index}
                        className="mb-5 md:text-2xl hover:text-orange-500 w-28 hover:-translate-y-1 duration-300 tracking-widest"
                      >
                        <Link
                          href={data.path}
                          className={`${isActive ? "text-orange-500" : ""}`}
                        >
                          {data.name}
                        </Link>
                      </li>
                    );
                  })}
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
                      <a
                        href={social.link}
                        target="_blank"
                        aria-label={social.aria}
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mx-auto left-0 right-0 w-20 border border-white shadow-2xl"></div>
              </div>
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/bullet.png"
                  alt="bullet-point"
                  width={90}
                  height={90}
                />
              </div>
              <div className="absolute bottom-0 left-0">
                <Image
                  src="/images/bullet.png"
                  alt="bullet-point"
                  width={90}
                  height={90}
                />
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
