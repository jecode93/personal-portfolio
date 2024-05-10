import React from 'react'

const ResumeButton = () => {
  return (
    <>
      <a
        href="resume.pdf"
        target="_blank"
        aria-label="Download my resume"
        className="px-5 py-2 border border-lightestSlate bg-blue text-xs md:text-sm font-medium text-lightestSlate uppercase hover:text-blue transition duration-500 btn41-43 btn-41"
      >
        Resume
      </a>
    </>
  );
}

export default ResumeButton