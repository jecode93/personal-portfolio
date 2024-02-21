import Link from 'next/link';
import React from 'react'

const ButtonComponent = ({ path, text }) => {
  return (
    <Link
      href={path}
      className="w-fit text-xs mt-5 bg-orange-500 hover:bg-orange-600 px-5 py-2 duration-300 rounded uppercase"
    >
      {text}
    </Link>
  );
}

export default ButtonComponent;