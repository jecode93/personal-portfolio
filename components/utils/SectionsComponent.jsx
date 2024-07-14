import React from "react";

const SectionsComponent = ({ id, otherClasses, children }) => {
  return (
    <section
      id={id}
      className={`px-5 md:px-10 lg:px-32 2xl:px-64 py-20 relative ${otherClasses}`}
    >
      {children}
    </section>
  );
};

export default SectionsComponent;
