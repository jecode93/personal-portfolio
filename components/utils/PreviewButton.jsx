import React from 'react'

const PreviewButton = ({link, title, text, icon}) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        aria-label={title}
        className="px-5 py-2 border border-lightestSlate bg-blue text-xs md:text-sm text-lightestSlate hover:text-blue transition duration-500 btn41-43 btn-41"
      >
        <div className="flex items-center">
          <p className="mr-3 tracking-wide">{text}</p>
          <span className="text-lg">{icon}</span>
        </div>
      </a>
    </>
  );
}

export default PreviewButton;