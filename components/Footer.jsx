import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <footer>
        <div className="border border-degrade" />
        <div className="text-center py-5 px-5">
          <p className="text-xs md:text-sm text-degrade tracking-widest">
            Copyright © 2023 - {currentYear}. All right reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;