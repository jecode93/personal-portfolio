"use client";
import React, { useState } from 'react';
import './styles/menu.css';
import Image from 'next/image';
import logo from '../images/logo-header2.png';
import Link from 'next/link';
import { MdClose } from "react-icons/md";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="px-5 py-5">
      <div className="header flex justify-between items-center">
        <Link href="/" className="hover:scale-125 duration-300">
          <Image src={logo} alt="Logo jecode93" width={50} />
        </Link>
        <div className="humberger cursor-pointer flex flex-col items-end justify-around w-10 h-10 rounded p-1 sm:hidden" onClick={handleClick}>
          <div className="line-1 border-2 border-orange-500 rounded"></div>
          <div className="line-2 border-2 border-orange-500 rounded"></div>
          <div className="line-3 border-2 border-orange-500 rounded"></div>
        </div>
      </div>
      <div className={`${isOpen ? "fixed w-screen h-screen top-0 left-0 right-0 backdrop-blur-sm" : ""}`}></div>
      <div id="mobile" className="relative">
        <div className={`${isOpen ? "right-0" : "-right-[100%]"} fixed top-0 bg-orange-600 w-2/3 h-full duration-500`}>
          <nav>

            <div className="absolute top-5 right-5 cursor-pointer text-white text-3xl font-extrabold duration-500" onClick={handleClick}>
              <span><MdClose className="hover:rotate-180 duration-300"/></span>
            </div>

            <div className="menu-links mt-48 ml-10">
              <ul className="menu-items" onClick={handleClick}>
                <li className="mb-4 text-lg font-bold hover:text-black duration-300 w-28  hover:-translate-y-1 duration-300">
                  <Link href="about">About</Link>
                </li>
                <li className="mb-4 text-lg font-bold hover:text-black duration-300 w-28 hover:-translate-y-1 duration-300">
                  <Link href="portfolio">Portfolio</Link>
                </li>
                <li className="mb-4 text-lg font-bold hover:text-black duration-300 w-28 hover:-translate-y-1 duration-300">
                  <Link href="services">Services</Link>
                </li>
                <li className="mb-4 text-lg font-bold hover:text-black duration-300 w-28 hover:-translate-y-1 duration-300">
                  <Link href="contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="socials-links mt-48 ml-10">
              <ul className="absolute flex gap-8 justify-center items-center left-0 right-0 bottom-32">
                <li className="text-3xl hover:-translate-y-2 duration-300">
                  <Link href="#">
                    <BsFacebook />
                  </Link>
                </li>
                <li className="text-3xl hover:-translate-y-2 duration-300">
                  <Link href="#">
                    <BsLinkedin />
                  </Link>
                </li>
                <li className="text-3xl hover:-translate-y-2 duration-300">
                  <Link href="#">
                    <BsGithub />
                  </Link>
                </li>
              </ul>
              <div className="absolute mx-auto left-0 right-0 bottom-24 w-20 border border-white shadow-2xl"></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;