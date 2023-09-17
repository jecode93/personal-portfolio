import React from 'react';
import './styles/menu.css';
import Image from 'next/image';
import logo from '../images/logo-header2.png';
import close from '../images/close.svg';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="px-10 py-10">
      <div className="header flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo jecode93" width={50} />
        </Link>
        <div className="humberger cursor-pointer flex flex-col items-end justify-around w-10 h-10 rounded p-1 sm:hidden">
          <div className="line-1 border-2 border-orange-500 rounded"></div>
          <div className="line-2 border-2 border-orange-500 rounded"></div>
          <div className="line-3 border-2 border-orange-500 rounded"></div>
        </div>
      </div>
      <div id="mobile" className="relative">
        <div className="fixed top-0 right-0 bg-orange-700 w-full h-full">
          <nav className="">
            <div className="absolute top-10 right-10 cursor-pointer text-white text-3xl font-extrabold">
              <span>X</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;