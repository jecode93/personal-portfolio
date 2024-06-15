import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ButtonComponent = ({ path, text }) => {
  return (
    <Link
      href={path}
      className="w-fit text-xs md:text-sm mt-5 font-medium border border-lightestSlate text-lightestSlate hover:text-blue px-5 py-2 uppercase btn41-43 btn-41"
    >
      <div className="flex gap-3 items-center">
        {text}
        <FaChevronRight />
      </div>
    </Link>
  );
};

export default ButtonComponent;
