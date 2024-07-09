import Link from "next/link";
import React from "react";

const BookingCalendly = ({ path, text }) => {
  return (
    <div>
      <Link
        href={path}
        className="w-fit text-xs md:text-sm mt-5 font-bold bg-orange-500 px-5 py-2 uppercase btn43-43 btn-43"
      >
        <div className="flex gap-3 items-center">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default BookingCalendly;
