"use client";
import React, { useState } from "react";
import "../styles/menu.css";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/js/data/menu";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import bullet from "@/public/images/bullet.svg";
import SocialComponent from "./SocialComponent";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className={`px-5 z-10 relative`}>
      <div className="relative">
        <div className="absolute flex justify-between items-center w-full top-7 md:px-5 lg:px-32 2xl:px-80">
          {/* logo */}
          <Link href="/">
            <p className="text-orange-500 tracking-wide text-lg">
              @jecode93<span className="cursor w-0">|</span>
            </p>
          </Link>
          {/* End logo */}

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="menu-items flex gap-10">
              {menu.map((data, index) => {
                const isActive = pathname === data.path;
                return (
                  <li
                    key={index}
                    className="hover:text-orange-500 transition duration-500 tracking-wide"
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
            <div className="hidden lg:block">
              <ResumeButton />
            </div>
          </div>
          {/* End Desktop menu */}
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center">
        {/* Mobile icon */}
        <div
          className="fixed top-5 right-5 cursor-pointer rounded p-1 mt-1 md:mt-0"
          onClick={handleClick}
        >
          <div className="flex justify-center items-center gap-1">
            <p className="hidden md:block text-lightestSlate">Menu</p>
            <div className="hamburger flex flex-col items-end justify-around w-10 h-6">
              <div className="line-1 border-2 border-orange-500 rounded"></div>
              <div className="line-2 border-2 border-orange-500 rounded"></div>
              <div className="line-3 border-2 border-orange-500 rounded"></div>
            </div>
          </div>
        </div>
        {/* End Mobile icon */}
      </div>

      {/* Blur background */}
      <div
        className={`${
          isOpen
            ? "fixed w-[100%] h-[100%] top-0 left-0 right-0 backdrop-blur-sm"
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
          } fixed top-0 bottom-0 bg-blue w-full md:w-[60%] h-[100%] duration-100`}
        >
          <nav className="h-full">
            <div
              className="absolute top-5 right-5 cursor-pointer text-lightestSlate text-3xl font-extrabold duration-500"
              onClick={handleClick}
            >
              <span>
                <MdClose className="hover:rotate-180 transition duration-500" />
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
                        className="mb-5 2xl:text-2xl hover:text-orange-500 w-28 hover:-translate-y-1 transition duration-500 tracking-widest"
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
                <div className="my-10">
                  <ResumeButton />
                </div>
              </div>

              {/* Social section */}
              <div className="socials-links z-40">
                <SocialComponent />
                <div className="mx-auto left-0 right-0 w-20 border border-lightestSlate shadow-2xl mt-10"></div>
              </div>
              <div className="absolute bottom-0 right-0">
                <Image src={bullet} alt="bullet-point" width={90} height={90} />
              </div>
              <div className="absolute bottom-0 left-0">
                <Image src={bullet} alt="bullet-point" width={90} height={90} />
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
