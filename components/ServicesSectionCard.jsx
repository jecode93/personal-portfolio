import React from "react";

const ServicesSectionCard = ({ content }) => {
  return (
    <div key={content.id} className="mb-20" id={content.href}>
      <div className="mb-5 flex items-center">
        <div className="w-12 mr-3 border border-orange-500" />
        <h1 className="font-medium text-xl md:text-3xl tracking-wide text-orange-500 uppercase">
          {content.title}
        </h1>
      </div>
      <div>
        <p className="text-degrade text-lg mb-16 text-justify">
          {content.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {content.structure.map((data) => (
            <div key={data.id} className="bg-darkblue p-5">
              <div>
                <span className="text-2xl font-semibold bg-orange-500 text-darkblue px-2">
                  {data.id}
                </span>
                <h3 className="font-medium text-xl md:text-2xl my-4">
                  {data["st-title"]}
                </h3>
                <p className="text-degrade text-lg md:text-justify">
                  {data["st-desc"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionCard;
