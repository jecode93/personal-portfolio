import React from "react";
import SocialComponent from "./SocialComponent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="md:flex justify-between items-center text-center py-7 px-5 md:px-10 lg:px-32">
          <p className="mb-5 md:mb-0 text-xs md:text-sm text-degrade tracking-widest">
            Copyright © 2023 - {currentYear}. All right reserved
          </p>
          <SocialComponent />
        </div>
      </footer>
    </>
  );
};

export default Footer;
