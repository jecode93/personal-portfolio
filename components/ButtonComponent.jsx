import Link from 'next/link';
import React from 'react'

const ButtonComponent = ({ path, text }) => {
  return (
    <Link
      href={path}
      className="w-fit text-xs mt-5 hover:scale-105 font-bold bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 px-5 py-2 duration-300 rounded uppercase"
    >
      {text}
    </Link>
  );
}

export default ButtonComponent;