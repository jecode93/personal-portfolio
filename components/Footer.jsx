import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <footer>
        <div className="border border-slate" />
        <div className="text-center py-5 px-5">
          <p className="md:text-xl opacity-60 tracking-widest">
            Copyright © {currentYear}. All right reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;