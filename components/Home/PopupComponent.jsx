import Image from "next/image";
import React from "react";
import { MdClose } from "react-icons/md";

const PopupComponent = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;

  return (
    <>
      <div className="relative z-50">
        {/* Background */}
        <div
          className="fixed flex justify-center top-0 bottom-0 left-0 bg-black w-full h-full opacity-70"
          onClick={onClose}
        />
        {/* End background */}

        {/* Container */}
        <div className="fixed flex flex-col top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] h-[80%] bg-darkblue z-30">
          {/* Close buton */}
          <div
            className="fixed top-3 right-3 cursor-pointer text-white text-3xl font-extrabold duration-500"
            onClick={onClose}
          >
            <span>
              <MdClose className="hover:rotate-180 duration-300" />
            </span>
          </div>
          {/* End close buton */}
          <div className="p-5 md:p-16 content overflow-auto">
            <h1 className="text-2xl md:text-4xl mt-5 md:mt-0 mb-5">
              {content.title}
            </h1>
            <Image
              src={content.image}
              width={500}
              height={500}
              alt={content.title}
              className="w-full rounded-md"
            />
            <div className="border border-degrade my-7" />
            <p className="text-degrade leading-6 tracking-widest description">
              {content.description}
            </p>
            <div className="my-7">
              <h1 className="text-2xl md:text-4xl">Technologies:</h1>
              <div className="grid grid-cols-2 gap-2 my-7">
                {content.stack.map((item, index) => (
                  <div key={index}>
                    <p className="bg-blue p-1 flex justify-center rounded">
                      <span className="text-degrade">{item}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End container */}
      </div>
    </>
  );
};

export default PopupComponent;
