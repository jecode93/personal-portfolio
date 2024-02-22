import Link from 'next/link';
import React from 'react'

const ButtonComponent = ({ path, text }) => {
  return (
    <Link
      href={path}
      className="w-fit text-sm mt-5 font-bold border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 py-1 duration-300 rounded uppercase"
    >
      {text}
    </Link>
  );
}

export default ButtonComponent;