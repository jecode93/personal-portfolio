import Link from "next/link";
import React from "react";

const ButtonComponent = ({ path, text }) => {
  return (
    <Link
      href={path}
      className="w-fit text-xs md:text-sm mt-5 font-medium border border-white text-white hover:text-blue px-3 py-2 uppercase btn41-43 btn-41"
    >
      {text}
    </Link>
  );
};

export default ButtonComponent;
