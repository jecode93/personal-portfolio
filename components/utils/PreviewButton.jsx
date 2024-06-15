import React from 'react'

const PreviewButton = ({link, title}) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        aria-label={title}
        className="px-5 py-2 border border-lightestSlate bg-blue text-xs md:text-sm font-medium text-lightestSlate uppercase hover:text-blue transition duration-500 btn41-43 btn-41"
      >
        Live Demo
      </a>
    </>
  );
}

export default PreviewButton;