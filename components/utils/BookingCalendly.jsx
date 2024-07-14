import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const BookingCalendly = ({ path, text }) => {
  return (
    <div>
      <Link
        href={path}
        className="w-fit text-xs md:text-sm mt-5 bg-orange-500 px-5 py-2 uppercase btn43-43 btn-43"
      >
        <div className="flex gap-2 items-center">
          {text}
          <FaCalendarAlt />
        </div>
      </Link>
    </div>
  );
};

export default BookingCalendly;
