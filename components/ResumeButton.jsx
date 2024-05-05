import React from 'react'

const ResumeButton = () => {
  return (
    <>
      <a
        href="resume.pdf"
        target="_blank"
        aria-label="Download my resume"
        className="px-3 py-1 border border-lightestSlate bg-blue text-xs md:text-sm font-medium text-lightestSlate uppercase hover:text-blue duration-300 btn41-43 btn-41"
      >
        Resume
      </a>
    </>
  );
}

export default ResumeButton